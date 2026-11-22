const https = require('https');

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
    return;
  }

  const { amount, customerName, customerEmail, customerPhone, planName, billingCycle } = req.body || {};

  if (!amount || !customerName || !customerPhone || !customerEmail) {
    res.status(400).json({
      success: false,
      message: 'Missing required order details: amount, customerName, customerPhone, or customerEmail.'
    });
    return;
  }

  const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID || '';
  const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY || '';
  const CASHFREE_ENV = (process.env.CASHFREE_ENVIRONMENT || 'PRODUCTION').toUpperCase();
  const CASHFREE_API_HOST = CASHFREE_ENV === 'PRODUCTION' ? 'api.cashfree.com' : 'sandbox.cashfree.com';

  const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const sanitizedPhone = (customerPhone || '').replace(/[^0-9]/g, '').slice(-10);

  const payload = JSON.stringify({
    order_id: orderId,
    order_amount: Number(amount).toFixed(2),
    order_currency: 'INR',
    customer_details: {
      customer_id: `cust_${sanitizedPhone || Date.now()}`,
      customer_name: customerName.trim(),
      customer_email: customerEmail.trim(),
      customer_phone: sanitizedPhone
    },
    order_meta: {
      return_url: `https://learning.cestrixgroup.com/pricing?order_id={order_id}`
    },
    order_note: `Cestrix ${planName || 'Coaching OS'} (${billingCycle || 'Annual'}) Subscription`
  });

  return new Promise((resolve) => {
    const cfReq = https.request(
      {
        hostname: CASHFREE_API_HOST,
        port: 443,
        path: '/pg/orders',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-version': '2023-08-01',
          'x-client-id': CASHFREE_APP_ID,
          'x-client-secret': CASHFREE_SECRET_KEY,
          'Content-Length': Buffer.byteLength(payload)
        }
      },
      (cfRes) => {
        let body = '';
        cfRes.on('data', (chunk) => (body += chunk));
        cfRes.on('end', () => {
          try {
            const parsed = JSON.parse(body);
            if (cfRes.statusCode >= 200 && cfRes.statusCode < 300) {
              res.status(200).json({
                success: true,
                order_id: parsed.order_id,
                payment_session_id: parsed.payment_session_id,
                cf_order_id: parsed.cf_order_id,
                environment: CASHFREE_ENV
              });
            } else {
              res.status(cfRes.statusCode || 500).json({
                success: false,
                message: parsed.message || 'Failed to create Cashfree order.',
                details: parsed
              });
            }
          } catch (e) {
            res.status(500).json({ success: false, message: 'Invalid response from Cashfree.' });
          }
          resolve();
        });
      }
    );

    cfReq.on('error', (err) => {
      res.status(500).json({ success: false, message: 'Cashfree request error.', error: err.message });
      resolve();
    });

    cfReq.write(payload);
    cfReq.end();
  });
};
