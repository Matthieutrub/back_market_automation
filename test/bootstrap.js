const puppeteer = require('puppeteer');
const { expect } = require('chai');


// puppeteer options
const opts = {
  headless: false,
  slowMo: 100,
  timeout: 10000
};

// expose variables
before (async () => {
  console.log('Before All Test');
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

// close browser and reset global variables
after ( () => {
  console.log('After All Test');
  browser.close();
});
