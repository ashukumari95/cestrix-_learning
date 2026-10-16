const https = require('https');
const fs = require('fs');

https.get('https://unsplash.com/s/photos/holding-smartphone', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
}, (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+/g;
    const matches = html.match(regex);
    if (matches) {
      const unique = Array.from(new Set(matches));
      console.log('Found:', unique.slice(0, 10));
    } else {
      console.log('No matches');
    }
  });
});
