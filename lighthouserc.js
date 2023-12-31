module.exports = {
  ci: {
    collect: {
      chromePath: '{{chromePath}}',
      url: {{urls}},
      numberOfRuns: 1,
      headful: false,
      puppeteerScript: './puppeteer-script.js',
      puppeteerLaunchOptions: {
        defaultViewport: null, 
        args:["--disable-gpu --window-size=1920,1080", "--no-sandbox"], 
        executablePath: '{{chromePath}}',
        headless: false
      },
      settings: {
        {{screenEmulation}}
        disableStorageReset: true,
        // Wait up to 90s for the page to load
        maxWaitForLoad: 90000
      }
    },
    upload: {
      // target: 'lhci',
      serverBaseUrl: '{{serverBaseUrl}}',
      token: '{{token}}', // could also use LHCI_TOKEN variable instead
    },
  },
};
