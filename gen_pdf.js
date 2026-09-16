const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810 });

  const filePath = path.resolve(__dirname, 'presentation_final.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Show all slides for printing, hide non-print elements
  await page.evaluate(() => {
    // Hide app shell
    document.querySelectorAll('.app-header, .app-footer, .global-progress, .notes-panel, dialog, .toast, .sr-only').forEach(el => el.style.display = 'none');
    // Reset viewport
    const vp = document.querySelector('.viewport');
    if (vp) { vp.style.height = 'auto'; vp.style.padding = '0'; vp.style.display = 'block'; vp.style.overflow = 'visible'; }
    const sw = document.querySelector('.stage-wrap');
    if (sw) { sw.style.width = '1440px'; sw.style.height = 'auto'; sw.style.transform = 'none'; }
    const stage = document.querySelector('.stage');
    if (stage) { stage.style.width = '1440px'; stage.style.height = 'auto'; stage.style.transform = 'none'; stage.style.boxShadow = 'none'; }
    // Show all main slides, hide backup
    document.querySelectorAll('.slide').forEach(slide => {
      if (slide.dataset.backup !== undefined) {
        slide.style.display = 'none';
      } else {
        slide.style.display = 'flex';
        slide.style.width = '1440px';
        slide.style.height = '810px';
        slide.style.pageBreakAfter = 'always';
        slide.style.breakAfter = 'page';
        slide.style.flexShrink = '0';
      }
    });
    // Remove page break after last main slide
    const mainSlides = [...document.querySelectorAll('.slide')].filter(s => s.dataset.backup === undefined);
    if (mainSlides.length) {
      const last = mainSlides[mainSlides.length - 1];
      last.style.pageBreakAfter = 'auto';
      last.style.breakAfter = 'auto';
    }
    // Hide zoom hints
    document.querySelectorAll('.zoom-hint, .text-button').forEach(el => el.style.display = 'none');
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.background = 'white';
  });

  await page.pdf({
    path: path.resolve(__dirname, 'presentation.pdf'),
    width: '1440px',
    height: '810px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: false
  });

  await browser.close();
  console.log('PDF generated: presentation.pdf');
})();
