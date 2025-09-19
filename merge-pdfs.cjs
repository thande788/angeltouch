const PDFMerger = require('pdf-merger-js').default;
const merger = new PDFMerger();

// List your PDF filenames in the order you want them
const files = [
  'home.pdf',
  'about.pdf',
  'services.pdf',
  'caregivers.pdf',
  'testimonials.pdf',
  'contact.pdf',
  'faqs.pdf',
  'resources.pdf'
];

(async () => {
  for (const file of files) {
    await merger.add(file);
  }
  await merger.save('all-pages.pdf'); // Save the merged PDF
  console.log('Merged PDF created: all-pages.pdf');
})();