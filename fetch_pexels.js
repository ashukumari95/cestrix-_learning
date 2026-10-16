import https from 'https';

https.get('https://www.pexels.com/search/phone%20hand%20mockup/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, res => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const regex = /https:\/\/images\.pexels\.com\/photos\/[0-9]+\/pexels-photo-[0-9]+\.jpeg/g;
    const matches = html.match(regex);
    if (matches) {
      const clean = Array.from(new Set(matches));
      console.log('Found pexels photos:', clean.slice(0, 8));
    } else {
      console.log('No matches, status:', res.statusCode);
    }
  });
});
