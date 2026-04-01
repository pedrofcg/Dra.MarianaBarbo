const fs = require('fs');
const content = fs.readFileSync('MarianaBarboPorfolio.jsx', 'utf8');
const match = content.match(/src="(data:image\/[^;]+;base64,([^"]+))"/);
if (match) {
  const base64 = match[2];
  const buffer = Buffer.from(base64, 'base64');
  fs.writeFileSync('src/assets/hero-image.png', buffer);
  console.log('Saved to src/assets/hero-image.png');
} else {
  console.log('No base64 image found');
}
