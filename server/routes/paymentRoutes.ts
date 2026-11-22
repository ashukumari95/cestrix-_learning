import { Router, Request, Response } from 'express'
import https from 'https'

export const paymentRoutes = Router()

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID || ''
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY || ''
const CASHFREE_ENV = (process.env.CASHFREE_ENVIRONMENT || 'PRODUCTION').toUpperCase()
const CASHFREE_API_HOST = CASHFREE_ENV === 'PRODUCTION' ? 'api.cashfree.com' : 'sandbox.cashfree.com'

// Helper to call Cashfree API
function cashfreeRequest(path: string, method: string, data?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const postData = data ? JSON.stringify(data) : ''
    const req = https.request(
      {
        hostname: CASHFREE_API_HOST,
        port: 443,
        path,
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-api-version': '2023-08-01',
          'x-client-id': CASHFREE_APP_ID,
          'x-client-secret': CASHFREE_SECRET_KEY,
          ...(data ? { 'Content-Length': Buffer.byteLength(postData) } : {})
        }
      },
      (res) => {
        let body = ''
        res.on('data', (chunk) => (body += chunk))
        res.on('end', () => {
          try {
            const parsed = JSON.parse(body)
            resolve({ statusCode: res.statusCode, data: parsed })
          } catch {
            resolve({ statusCode: res.statusCode, raw: body })
          }
        })
      }
    )

    req.on('error', (err) => reject(err))
    if (postData) req.write(postData)
    req.end()
  })
}

// 1. Create Cashfree Order
paymentRoutes.post('/create-order', async (req: Request, res: Response) => {
  try {
    const { amount, customerName, customerEmail, customerPhone, planName, billingCycle } = req.body

    if (!amount || !customerName || !customerPhone || !customerEmail) {
      return res.status(400).json({
        success: false,
        message: 'Missing required order details: amount, customerName, customerPhone, or customerEmail.'
      })
    }

    const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`
    const sanitizedPhone = customerPhone.replace(/[^0-9]/g, '').slice(-10)

    const payload = {
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
    }

    const response = await cashfreeRequest('/pg/orders', 'POST', payload)

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return res.json({
        success: true,
        order_id: response.data.order_id,
        payment_session_id: response.data.payment_session_id,
        cf_order_id: response.data.cf_order_id,
        environment: CASHFREE_ENV
      })
    } else {
      return res.status(response.statusCode || 500).json({
        success: false,
        message: response.data?.message || 'Cashfree payment session creation failed.',
        details: response.data
      })
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Failed to connect to Cashfree payment gateway.',
      error: error?.message
    })
  }
})

// 2. Verify Cashfree Order Status
paymentRoutes.get('/verify-order/:order_id', async (req: Request, res: Response) => {
  try {
    const { order_id } = req.params
    const response = await cashfreeRequest(`/pg/orders/${encodeURIComponent(order_id)}`, 'GET')

    if (response.statusCode === 200) {
      return res.json({
        success: true,
        order: response.data,
        isPaid: response.data.order_status === 'PAID'
      })
    } else {
      return res.status(response.statusCode || 500).json({
        success: false,
        message: 'Could not fetch order status from Cashfree.',
        details: response.data
      })
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Failed to verify Cashfree order.',
      error: error?.message
    })
  }
})
