const puppeteer = require('puppeteer');
const fs = require('fs');

const bassguitarsArray = [];

const scrapper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto(url);

  await page.click('.fx-space-left--xs');

  await page.type('.search-input__field', 'bajos eléctricos ibanez');

  await page.click('.fx-icon--search');

  await page.setViewport({ width: 1080, height: 1024 });

  repeat(page, browser);
};

const repeat = async (page, browser) => {
  const arrayDivs = await page.$$('.fx-product-list-entry');

  for (const bassGuitarDiv of arrayDivs) {
    let price;
    let title = await bassGuitarDiv.$eval(
      '.title__manufacturer',
      (el) => el.textContent
    );
    let img = await bassGuitarDiv.$eval('img', (el) => el.src);

    price = await bassGuitarDiv.$eval('.product__price-primary', (el) =>
      parseFloat(el.textContent.slice(0, el.textContent.length - 1))
    );

    const objectBassGuitar = {
      title,
      price,
      img,
    };
    bassguitarsArray.push(objectBassGuitar);
  }

  try {
    await page.$eval('.search-pagination__show-more', (el) => el.click());
    await page.waitForNavigation();
    repeat(page);
  } catch (error) {
    write(bassguitarsArray);
  }
};

const write = (bassguitarsArray) => {
  fs.writeFile(
    'bassGuitarsInThomann.json',
    JSON.stringify(bassguitarsArray),
    () => {
      console.log('Archivo escrito');
    }
  );
};

module.exports = { scrapper };
