const puppeteer = require('puppeteer');
const pages = [
  'http://localhost:5173/',
  'http://localhost:5173/about',
  'http://localhost:5173/services',
  'http://localhost:5173/caregivers',
  'http://localhost:5173/testimonials',
  'http://localhost:5173/contact',
  'http://localhost:5173/faqs',
  'http://localhost:5173/resources'
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (const url of pages) {
    await page.goto(url, { waitUntil: 'networkidle0' });
    const filename = url.split('/').pop() || 'home';
    await page.pdf({
      path: `${filename}.pdf`,
      format: 'A4',
      printBackground: true
    });
  }
  await browser.close();
})();