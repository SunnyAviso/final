import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import safeNavigate from './controllers/helpers/coles/safeNavigate.js';
import handleSteps from './controllers/helpers/coles/steps.js';
import locations from './constant/location.js';
import categories from './constant/categories.js';
import Product from './models/products.js';
import dbConnect from './db/dbConnect.js';
import fs from 'fs';
const categoriesId = JSON.parse(fs.readFileSync(`./constant/categories.json`, 'utf8'));
const userAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Version/14.1.2 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43',
  'Mozilla/5.0 (Linux; Android 11; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Android 11; Mobile; rv:109.0) Gecko/20100101 Firefox/109.0',
  'Mozilla/5.0 (Linux; Android 11; SM-A505F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 OPR/68.0.2254.63568',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
];

puppeteer.use(StealthPlugin());

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
const captcha = async (page, url) => {
  let doloop = true;
  let i = 1;
  let toRefresh = 2;
  try {
    while (doloop) {
      await safeNavigate(page, url);
      const captchaDetected = await page.evaluate(() => {
        return !!document.querySelector('iframe[src*="_Incapsula_Resource"]');
      });
      console.log('CAPTCHA or Incapsula protection detected, doing loop...', i);

      if (!captchaDetected) {
        console.log('No CAPTCHA detected.');
        break;
      }
      i = i + 1;
    }
    return true;
  } catch (error) {
    return true;
  }
};

const scraper = async () => {
  await dbConnect();
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      // userDataDir: 'C:\\Users\\OBI - Raymond\\AppData\\Local\\Google\\Chrome\\User Data2\\Profile 2',
    });
    for (const loc of locations) {
      let page2;
      page2 = await browser.newPage();
      await page2.setExtraHTTPHeaders({
        Referer: 'https://www.coles.com.au/',
      });

      // const loadedCookies = JSON.parse(fs.readFileSync('./coles/colesCookies.json', 'utf-8'));
      // await page2.setCookie(...loadedCookies);
      await safeNavigate(page2, 'https://www.coles.com.au');
      await page2.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');
      await delay(3000);
      // await page2.reload();
      await delay(5000);
      const a = await handleSteps(page2, loc, 'https://coles.com.au');
      // const cookies = await page2.cookies();
      // fs.writeFileSync('./coles/colesCookies.json', JSON.stringify(cookies, null, 2));
      await Promise.allSettled(
        categories.map(async (categ, index) => {
          let category;
          category = categ.category;
          await Promise.allSettled(
            categ.subCategories.map(async (sub, index) => {
              let subCategory;
              subCategory = sub.subCategory;
              if (subCategory === 'Nappies Wipes') subCategory = 'Nappies & Nappy Pants';
              await Promise.allSettled(
                sub.childItems.map(async (ext, index) => {
                  let extensionCategory;
                  extensionCategory = ext.extensionCategory;

                  // baby category logic
                  // if (extensionCategory === 'Specialty') extensionCategory = 'Specialty Formula'
                  if (extensionCategory === 'Swimming Nappies') extensionCategory = 'Swimmers';
                  const updatedCategory = category
                    .replace(/[^\w\s-]/g, '') // Remove special characters
                    .replace(/\s+/g, '-') // Replace one or more spaces with a single hyphen
                    .replace(/-+/g, '-');
                  const updatedSubCategory = subCategory
                    .replace(/[^\w\s-]/g, '') // Remove special characters
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-');
                  const updatedextensionCategory = extensionCategory
                    .replace(/[^\w\s-]/g, '') // Remove special characters
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-');

                  let url;
                  if (extensionCategory) {
                    url = `https://www.coles.com.au/browse/${updatedCategory.toLowerCase()}/${updatedSubCategory.toLowerCase()}/${updatedextensionCategory.toLowerCase()}`;
                  } else {
                    url = `https://www.coles.com.au/browse/${updatedCategory.toLowerCase()}/${updatedSubCategory.toLowerCase()}`;
                  }
                  // Baby category
                  if (category === 'Baby') {
                    if (sub.subCategory === 'a') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/baby/nappies-nappy-pants/bed-mats`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/baby/nappies-nappy-pants/eco-friendly-nappies`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/baby/nappies-nappy-pants/nappies`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/baby/nappies-nappy-pants/nappy-pants`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/baby/nappies-nappy-pants/night-pants`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/baby/nappies-nappy-pants/reusable-nappies`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/baby/nappies-nappy-pants/swimmers`;
                    }
                    if (sub.subCategory === 'b') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/baby/baby-wipes/extra-large-pack`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/baby/baby-wipes/large-pack`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/baby/baby-wipes/medium-pack`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/baby/baby-wipes/refill-pack`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/baby/baby-wipes/small-pack`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/baby/baby-wipes/travel-pack`;
                    }
                    if (sub.subCategory === 'c') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/baby/baby-formula/a2-formula`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/baby/baby-formula/cow-formula`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/baby/baby-formula/goat-formula`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/baby/baby-formula/organic-formula`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/baby/baby-formula/specialty-formula`;
                    }
                    if (sub.subCategory === 'd') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/baby/baby-feeding/nursing-care`;
                    }
                    if (sub.subCategory === 'e') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/baby/baby-accessories/baby-grooming-oral-care`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/baby/baby-accessories/baby-health-safety`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/baby/baby-accessories/nappy-change-accessories`;
                    }
                    if (sub.subCategory === 'f') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/baby/baby-toddler-food/baby-toddler-snacks`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/baby/baby-toddler-food/baby-cereals`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/baby/baby-toddler-food/baby-food-jars`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/baby/baby-toddler-food/baby-food-pouches`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/baby/baby-toddler-food/baby-pasta`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/baby/baby-toddler-food/baby-rusks`;
                    }
                    if (sub.subCategory === 'g') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/baby/baby-meal-time/baby-plates-bowls`;
                    }
                    if (sub.subCategory === 'h') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/baby/bottles-feeding/baby-bottles`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/baby/bottles-feeding/baby-cups`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/baby/bottles-feeding/baby-teats`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/baby/bottles-feeding/bottle-accessories`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/baby/bottles-feeding/bottle-cleaning`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/baby/bottles-feeding/bottle-feeding`;
                    }
                    if (sub.subCategory === 'i') {
                      if (ext.extensionCategory === 'a') url = ``;
                      if (ext.extensionCategory === 'b') url = ``;
                      if (ext.extensionCategory === 'c') url = ``;
                      if (ext.extensionCategory === 'd') url = ``;
                      if (ext.extensionCategory === 'e') url = ``;
                      if (ext.extensionCategory === 'f') url = ``;
                      if (ext.extensionCategory === 'g') url = ``;
                      if (ext.extensionCategory === 'h') url = ``;
                      if (ext.extensionCategory === 'i') url = ``;
                    }
                    if (sub.subCategory === '') {
                      if (ext.extensionCategory === '') url = ``;
                    }
                  }
                  // bakery category
                  if (category === 'Bakery') {
                    if (sub.subCategory === 'In-Store Bakery') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/bakery/chilled-cakes-desserts`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/bakery/easter-bakery`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/bakery/gluten-free-range`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/bakery/instore-bakery-sweet-treats`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/bakery/packaged-breads`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks`;
                      if (ext.extensionCategory === 'i') url = `https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats`;
                      if (ext.extensionCategory === 'j') url = `https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases`;
                      if (ext.extensionCategory === 'k') url = `https://www.coles.com.au/browse/bakery/vegan-range`;
                    }
                  }
                  // category Dairy, Eggs & Fridge
                  if (category === 'Dairy, Eggs & Fridge') {
                    if (sub.subCategory === 'Cheese') {
                      if (ext.extensionCategory === `a`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/butter-margarine`;
                      if (ext.extensionCategory === `b`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/cheese`;
                      if (ext.extensionCategory === `c`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/cream-custard`;
                      if (ext.extensionCategory === `d`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/dairy-desserts`;
                      if (ext.extensionCategory === `e`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/dairy-world-foods`;
                      if (ext.extensionCategory === `f`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/dips-pate`;
                      if (ext.extensionCategory === `g`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/eggs`;
                      if (ext.extensionCategory === `h`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/fresh-pasta-sauces`;
                      if (ext.extensionCategory === `i`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/garlic-bread-pastry-sheets`;
                      if (ext.extensionCategory === `j`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/long-life-milk`;
                      if (ext.extensionCategory === `k`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/milk`;
                      if (ext.extensionCategory === `l`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats`;
                      if (ext.extensionCategory === `m`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals`;
                      if (ext.extensionCategory === `n`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan`;
                      if (ext.extensionCategory === `o`) url = `https://www.coles.com.au/browse/dairy-eggs-fridge/yoghurt`;
                    }
                  }
                  // category Deli & Chilled Meats
                  if (category === 'Deli & Chilled Meats') {
                    if (sub.subCategory === 'Deli Meats') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/deli/deli-meats`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/deli/deli-packaged-meat`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/deli/deli-poultry`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/deli/deli-seafood`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/deli/entertaining`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/deli/gourmet-cheese`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/deli/pre-made-platters`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/deli/ready-to-eat`;
                    }
                  }
                  if (category === 'Drinks') {
                    if (sub.subCategory === 'Chilled Drinks') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/drinks/coffee-drinks`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/drinks/cold-drinks`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/drinks/cordials`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/drinks/energy-drinks`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/drinks/flavoured-milk`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/drinks/iced-tea`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/drinks/juice`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/drinks/long-life-milk`;
                      if (ext.extensionCategory === 'i') url = `https://www.coles.com.au/browse/drinks/non-alcoholic`;
                      if (ext.extensionCategory === 'j') url = `https://www.coles.com.au/browse/drinks/soft-drinks`;
                      if (ext.extensionCategory === 'k') url = `https://www.coles.com.au/browse/drinks/sports-drinks`;
                      if (ext.extensionCategory === 'l') url = `https://www.coles.com.au/browse/drinks/tea-drinks`;
                      if (ext.extensionCategory === 'm') url = `https://www.coles.com.au/browse/drinks/water`;
                    }
                  }
                  // category Freezer
                  if (category === 'Freezer') {
                    if (sub.subCategory === 'Chips & Wedges') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/frozen/ice-cream`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/frozen/frozen-baby-toddler-meals`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/frozen/frozen-chicken-beef-pork`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/frozen/frozen-chips-wedges`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/frozen/frozen-desserts`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/frozen/frozen-fish-seafood`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/frozen/frozen-fruit`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/frozen/frozen-gluten-free`;
                      if (ext.extensionCategory === 'i') url = `https://www.coles.com.au/browse/frozen/frozen-meals`;
                      if (ext.extensionCategory === 'j') url = `https://www.coles.com.au/browse/frozen/frozen-pastry-party-food`;
                      if (ext.extensionCategory === 'k') url = `https://www.coles.com.au/browse/frozen/frozen-pizza-bases`;
                      if (ext.extensionCategory === 'l') url = `https://www.coles.com.au/browse/frozen/frozen-vegan-vegetarian`;
                      if (ext.extensionCategory === 'm') url = `https://www.coles.com.au/browse/frozen/frozen-vegetables`;
                      if (ext.extensionCategory === 'n') url = `https://www.coles.com.au/browse/frozen/frozen-world-food`;
                    }
                  }
                  // category Fruit & Veg
                  if (category === 'Fruit & Veg') {
                    if (sub.subCategory === 'Organic') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/fruit-vegetables/packaged-salad`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/fruit-vegetables/prepared-vegetable`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/fruit-vegetables/salad-herbs`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/fruit-vegetables/scoop-weigh`;
                    }
                  }
                  // category Health & Beauty
                  if (category === 'Health & Beauty') {
                    if (sub.subCategory === 'Cosmetics') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/health-beauty/continence-care`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/health-beauty/cosmetics`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/health-beauty/dental-care`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/health-beauty/first-aid-medicinal`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/health-beauty/hair-care`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/health-beauty/period-care`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/health-beauty/personal-care`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/health-beauty/shaving-hair-removal`;
                      if (ext.extensionCategory === 'i') url = `https://www.coles.com.au/browse/health-beauty/shower-bath-care`;
                      if (ext.extensionCategory === 'j') url = `https://www.coles.com.au/browse/health-beauty/skin-care`;
                      if (ext.extensionCategory === 'k') url = `https://www.coles.com.au/browse/health-beauty/sun-protection`;
                      if (ext.extensionCategory === 'l') url = `https://www.coles.com.au/browse/health-beauty/travel-packs-and-minis`;
                      if (ext.extensionCategory === 'm') url = `https://www.coles.com.au/browse/health-beauty/vitamins-supplements`;
                    }
                  }
                  // category Household
                  if (category === 'Household') {
                    if (sub.subCategory === 'Homewares') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/household/air-fresheners-home-fragrance`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/household/charity-donations`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/household/cleaning-goods`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/household/clothing-accessories`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/household/craft-toys-games`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/household/dishwashing`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/household/diy-car`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/household/electrical`;
                      if (ext.extensionCategory === 'i') url = `https://www.coles.com.au/browse/household/food-storage`;
                      if (ext.extensionCategory === 'j') url = `https://www.coles.com.au/browse/household/garden`;
                      if (ext.extensionCategory === 'k') url = `https://www.coles.com.au/browse/household/gifting`;
                      if (ext.extensionCategory === 'l') url = `https://www.coles.com.au/browse/household/homewares`;
                      if (ext.extensionCategory === 'm') url = `https://www.coles.com.au/browse/household/kitchen`;
                      if (ext.extensionCategory === 'n') url = `https://www.coles.com.au/browse/household/laundry`;
                      if (ext.extensionCategory === 'o') url = `https://www.coles.com.au/browse/household/mobile-tech-accessories`;
                      if (ext.extensionCategory === 'p') url = `https://www.coles.com.au/browse/household/outdoors`;
                      if (ext.extensionCategory === 'q') url = `https://www.coles.com.au/browse/household/party-supplies`;
                      if (ext.extensionCategory === 'r') url = `https://www.coles.com.au/browse/household/pest-control`;
                      if (ext.extensionCategory === 's') url = `https://www.coles.com.au/browse/household/reusable-shopping-bags`;
                      if (ext.extensionCategory === 't') url = `https://www.coles.com.au/browse/household/sporting-essentials`;
                      if (ext.extensionCategory === 'u') url = `https://www.coles.com.au/browse/household/stationery-media`;
                      if (ext.extensionCategory === 'v') url = `https://www.coles.com.au/browse/household/tech-accessories`;
                      if (ext.extensionCategory === 'w') url = `https://www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels`;
                    }
                  }
                  // category Pantry
                  if (category === 'Pantry') {
                    if (sub.subCategory === 'Baking') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/pantry/baking`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/pantry/breakfast`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/pantry/canned-food-soups-noodles`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/pantry/coffee`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/pantry/desserts`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/pantry/health-foods`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet`;
                      if (ext.extensionCategory === 'i') url = `https://www.coles.com.au/browse/pantry/herbs-spices`;
                      if (ext.extensionCategory === 'j') url = `https://www.coles.com.au/browse/pantry/international-foods`;
                      if (ext.extensionCategory === 'k') url = `https://www.coles.com.au/browse/pantry/jams-honey-spreads`;
                      if (ext.extensionCategory === 'l') url = `https://www.coles.com.au/browse/pantry/local-foods`;
                      if (ext.extensionCategory === 'm') url = `https://www.coles.com.au/browse/pantry/oils-vinegars`;
                      if (ext.extensionCategory === 'n') url = `https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains`;
                      if (ext.extensionCategory === 'o') url = `https://www.coles.com.au/browse/pantry/pickled-vegetables-condiments`;
                      if (ext.extensionCategory === 'p') url = `https://www.coles.com.au/browse/pantry/sauces`;
                      if (ext.extensionCategory === 'q') url = `https://www.coles.com.au/browse/pantry/stocks-gravy`;
                      if (ext.extensionCategory === 'r') url = `https://www.coles.com.au/browse/pantry/tea`;
                      // if (ext.extensionCategory === 's') url = `https://www.coles.com.au/browse/pantry/chips-crackers-snacks`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/chips-chocolates-snacks/biscuits-cookies`;
                      if (ext.extensionCategory === 't') url = `https://www.coles.com.au/browse/chips-chocolates-snacks/chips`;
                      if (ext.extensionCategory === 'u') url = `https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates`;
                      if (ext.extensionCategory === 'v') url = `https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes`;
                      if (ext.extensionCategory === 'w') url = `https://www.coles.com.au/browse/chips-chocolates-snacks/gum-mints-lozenges`;
                      if (ext.extensionCategory === 'x') url = `https://www.coles.com.au/browse/chips-chocolates-snacks/lollies-licorice`;
                      if (ext.extensionCategory === 'y') url = `https://www.coles.com.au/browse/chips-chocolates-snacks/snacks`;
                    }
                  }
                  // category Pet
                  if (category === 'Pet') {
                    if (sub.subCategory === 'Birds') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/pet/birds`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/pet/cat-kitten`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/pet/dog-puppy`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/pet/fish-food-accessories`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/pet/pet-scoop-weigh`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/pet/small-pets`;
                    }
                  }
                  if (category === 'Poultry, Meat & Seafood') {
                    if (sub.subCategory === 'BBQ Meat & Seafood') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/meat-seafood/beef-veal`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/meat-seafood/game`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/meat-seafood/ham`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/meat-seafood/lamb`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/meat-seafood/mince`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/meat-seafood/organic-meat`;
                      if (ext.extensionCategory === 'i') url = `https://www.coles.com.au/browse/meat-seafood/pork`;
                      if (ext.extensionCategory === 'j') url = `https://www.coles.com.au/browse/meat-seafood/poultry`;
                      if (ext.extensionCategory === 'k') url = `https://www.coles.com.au/browse/meat-seafood/seafood`;
                    }
                  }
                  if (category === 'Back to School') {
                    if (sub.subCategory === 'BBQ Meat & Seafood') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/back-to-school/easy-school-night-dinners`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/back-to-school/school-breakfast`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/back-to-school/school-lunches-snacking`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/back-to-school/school-stationery-accessories`;
                    }
                  }
                  if (category === 'Back to School') {
                    if (sub.subCategory === 'BBQ Meat & Seafood') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/back-to-school/easy-school-night-dinners`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/back-to-school/school-breakfast`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/back-to-school/school-lunches-snacking`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/back-to-school/school-stationery-accessories`;
                    }
                  }
                  if (category === 'Liquor') {
                    if (sub.subCategory === 'BBQ Meat & Seafood') {
                      if (ext.extensionCategory === 'a') url = `https://www.coles.com.au/browse/liquor/beer`;
                      if (ext.extensionCategory === 'b') url = `https://www.coles.com.au/browse/liquor/cask-fortified-wine`;
                      if (ext.extensionCategory === 'c') url = `https://www.coles.com.au/browse/liquor/champagne-sparkling`;
                      if (ext.extensionCategory === 'd') url = `https://www.coles.com.au/browse/liquor/cider`;
                      if (ext.extensionCategory === 'e') url = `https://www.coles.com.au/browse/liquor/low-mid-strength`;
                      if (ext.extensionCategory === 'f') url = `https://www.coles.com.au/browse/liquor/premixed-drinks`;
                      if (ext.extensionCategory === 'g') url = `https://www.coles.com.au/browse/liquor/red-wine`;
                      if (ext.extensionCategory === 'h') url = `https://www.coles.com.au/browse/liquor/rose`;
                      if (ext.extensionCategory === 'i') url = `https://www.coles.com.au/browse/liquor/spirits`;
                      if (ext.extensionCategory === 'j') url = `https://www.coles.com.au/browse/liquor/white-wine`;
                    }
                  }
                  let page;
                  try {
                    // page = (await browser.newPage()).removeAllListeners('request');
                    page = await browser.newPage();
                    await page.setViewport({
                      width: 316, // Width of the browser
                      height: 743, // Height of the browser
                      deviceScaleFactor: 1, // Pixel density (1 for standard screens)
                    });
                    console.log('Page loaded successfully.');
                    const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
                    await page.setUserAgent(randomUserAgent);
                    await page.setExtraHTTPHeaders({
                      Referer: url,
                    });
                    await page.waitForSelector('body', { timeout: 90000 });

                    await safeNavigate(page, url);
                    // await delay(6000);
                    await delay(6000);
                    await page.evaluate(() => {
                      window.scrollTo(0, document.body.scrollHeight);
                    });
                    await delay(5000); // Wait for content to load after scrolling
                    // await delay(8000);

                    let hasProducts = true;
                    let i = 1;
                    while (hasProducts) {
                      if (i === 1) {
                        await captcha(page, url);
                      }
                      if (i > 1) {
                        let url2;
                        url2 = `${url}?page=${i}`;
                        await safeNavigate(page, url2);
                        await captcha(page, url2);

                        await page.evaluate(() => {
                          window.scrollTo(0, document.body.scrollHeight);
                        });
                        await delay(5000);
                      }
                      await delay(2000);
                      // Extract product data
                      const productData = await page.evaluate(
                        (category, subCategory, extensionCategory, loc, categoriesId) => {
                          const products = document.querySelectorAll('section[data-testid="product-tile"]');
                          if (!products || products.length === 0) return [];
                          return Array.from(products).map((product) => {
                            const getPrices = (location, priceInCents, priceInCentsPerUnits, unit) => {
                              const prices = [];
                              let loc;
                              if (location.toLowerCase() === 'Sydney, NSW 2000'.toLowerCase()) loc = 'NSW';
                              if (location.toLowerCase() === 'Chadstone Shopping Centre, 1341 Dandenong Road, MALVERN EAST VIC 3145'.toLowerCase()) loc = 'VIC';
                              if (location.toLowerCase() === 'Kedron, QLD 4031'.toLowerCase()) loc = 'QLD';
                              if (location.toLowerCase() === 'Perth, WA 6000'.toLowerCase()) loc = 'WA';
                              if (location.toLowerCase() === 'Kilburn, SA 5084'.toLowerCase()) loc = 'SA';
                              if (location.toLowerCase() === 'Hobart, TAS 7000'.toLowerCase()) loc = 'TAS';
                              if (location.toLowerCase() === 'Acton, ACT 2601'.toLowerCase()) loc = 'ACT';
                              if (location.toLowerCase() === 'Casuarina, NT 0810'.toLowerCase()) loc = 'NT';
                              if (priceInCents && priceInCentsPerUnits) {
                                if (loc.toLowerCase() === 'nsw') {
                                  prices.push({
                                    state: 'nsw'.toUpperCase(),
                                    price: parseFloat(Number(priceInCents).toFixed(2)),
                                    price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                    price_unit: unit,
                                  });
                                }
                                if (loc.toLowerCase() === 'vic') {
                                  prices.push({
                                    state: 'vic'.toUpperCase(),
                                    price: parseFloat(Number(priceInCents).toFixed(2)),
                                    price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                    price_unit: unit,
                                  });
                                }
                                if (loc.toLowerCase() === 'qld') {
                                  prices.push({
                                    state: 'qld'.toUpperCase(),
                                    price: parseFloat(Number(priceInCents).toFixed(2)),
                                    price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                    price_unit: unit,
                                  });
                                }
                                if (loc.toLowerCase() === 'wa') {
                                  prices.push({
                                    state: 'wa'.toUpperCase(),
                                    price: parseFloat(Number(priceInCents).toFixed(2)),
                                    price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                    price_unit: unit,
                                  });
                                }
                                if (loc.toLowerCase() === 'sa') {
                                  prices.push({
                                    state: 'sa'.toUpperCase(),
                                    price: parseFloat(Number(priceInCents).toFixed(2)),
                                    price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                    price_unit: unit,
                                  });
                                }
                                if (loc.toLowerCase() === 'tas') {
                                  prices.push({
                                    state: 'tas'.toUpperCase(),
                                    price: parseFloat(Number(priceInCents).toFixed(2)),
                                    price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                    price_unit: unit,
                                  });
                                }
                                if (loc.toLowerCase() === 'act') {
                                  prices.push({
                                    state: 'act'.toUpperCase(),
                                    price: parseFloat(Number(priceInCents).toFixed(2)),
                                    price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                    price_unit: unit,
                                  });
                                }
                                if (loc.toLowerCase() === 'nt') {
                                  prices.push({
                                    state: 'nt'.toUpperCase(),
                                    price: parseFloat(Number(priceInCents).toFixed(2)),
                                    price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                    price_unit: unit,
                                  });
                                }
                              }

                              return prices;
                            };
                            const href = product.querySelector('.product__image_area a')?.href || 'N/A';

                            let weight = 'N/A';
                            let coles_product_id = 'N/A';
                            let unit = null;

                            if (href !== 'N/A') {
                              const parts = href.split('-');
                              const potentialWeight = parts.length > 2 ? parts[parts.length - 2] : 'N/A';

                              if (/\d/.test(potentialWeight)) {
                                weight = potentialWeight;
                                unit = weight.replace(/[\d\s]/g, '');
                              } else {
                                weight = parts.length > 3 ? parts[parts.length - 3] + potentialWeight : 'N/A';
                                unit = potentialWeight;
                              }

                              coles_product_id = parts.length > 0 ? parts[parts.length - 1] : 'N/A';
                            }

                            // Extract and convert price to cents
                            const priceText = product.querySelector('.price__value')?.textContent.trim() || 'N/A';
                            let pricePerUnit = 'N/A';
                            if (priceText !== 'N/A' && priceText.startsWith('$')) {
                              pricePerUnit = Math.round(parseFloat(priceText.replace('$', '')) * 100);
                            }

                            // Extract price per unit
                            const pricePerUnitText = product.querySelector('.price__calculation_method')?.textContent.trim() || 'N/A';
                            let priceInCents = 'N/A';
                            if (pricePerUnitText !== 'N/A') {
                              const match = pricePerUnitText.match(/\$(\d+(\.\d+)?)/); // Regex to extract "$5.95"
                              if (match && match[1]) {
                                priceInCents = Math.round(parseFloat(match[1]) * 100); // Convert to cents
                              }
                            }
                            let sub;
                            sub = subCategory;

                            let ext;
                            ext = extensionCategory;

                            // baby category
                            if (subCategory === 'Nappies & Nappy Pants') sub = 'Nappies Wipes';
                            // if (extensionCategory === 'Specialty Formula') ext = 'Specialty'
                            if (extensionCategory === 'Swimmers') ext = 'Swimming Nappies';

                            // bakery category
                            if (subCategory === 'In-Store Bakery') {
                              sub = `In-Store Bakery`;
                              if (ext === 'Donuts') ext = 'Donuts & Cookies';
                              if (ext === 'Cookies') ext = 'Donuts & Cookies';
                            }
                            if (subCategory === 'Packaged Bread & Bakery') {
                              sub = `Packaged Bread & Bakery`;
                            }

                            // category Dairy, Eggs & Fridge
                            if (category === 'Dairy, Eggs & Fridge') {
                              if (subCategory === 'Dips & Pate') {
                                if (extensionCategory === 'Pate') ext = 'Pate, Paste & Caviar';
                                if (extensionCategory === 'Paste') ext = 'Pate, Paste & Caviar';
                              }
                            }
                            // category Drinks
                            if (category === 'Drinks') {
                              if (subCategory === 'Chilled Drinks') {
                                if (extensionCategory === 'Soft Drinks' || extensionCategory === 'Energy Drinks') ext = 'Chilled Soft Drinks & Energy Drinks';
                              }
                            }
                            // category Freezer
                            if (category === 'Freezer') {
                              if (subCategory === 'Frozen Fruit') {
                                if (extensionCategory === 'Berries' || extensionCategory === 'Tropical') ext = 'Berries & Tropical';
                              }
                              if (subCategory === 'Frozen Party Food') {
                                if (extensionCategory === 'Pastries' || extensionCategory === 'Pies & Quiches') ext = 'Pies, Pastries & Quiches';
                              }
                              if (subCategory === 'Frozen Vegetables') {
                                if (extensionCategory === 'Beans' || extensionCategory === 'Peas') ext = 'Beans & Peas';
                              }
                            }
                            // category Fruit & Veg
                            if (category === 'Fruit & Veg') {
                              if (subCategory === 'Fruit') {
                                if (extensionCategory === 'Apples' || extensionCategory === 'Pears') ext = 'Apples & Pears';
                                if (extensionCategory === 'Melons' || extensionCategory === 'Mangoes') ext = 'Melons & Mangoes';
                                if (extensionCategory === 'Pineapples' || extensionCategory === 'Kiwi Fruit') ext = 'Pineapples & Kiwi Fruit';
                              }
                              if (subCategory === 'Vegetables') {
                                if (extensionCategory === 'Potatoes' || extensionCategory === 'Pumpkins') ext = 'Potatoes & Pumpkins';
                                if (extensionCategory === 'Eggplant' || extensionCategory === 'Zucchini & Squash') ext = 'Zucchini, Eggplant & Squash';
                              }
                            }
                            // category Household
                            if (category === 'Household') {
                              if (subCategory === 'Laundry') {
                                if (extensionCategory === 'Ironing' || extensionCategory === 'Accessories') ext = `Ironing & Accessories`;
                              }
                            }
                            // category Pantry
                            if (category === 'Pantry') {
                              if (subCategory === 'Breakfast & Spreads') {
                                if (extensionCategory === 'Muesli' || extensionCategory === 'Oats') ext = `Muesli & Oats`;
                              }
                            }
                            // category Poultry, Meat & Seafood
                            if (category === 'Poultry, Meat & Seafood') {
                              if (subCategory === 'BBQ Meat & Seafood') {
                                if (extensionCategory === 'Burgers' || extensionCategory === 'Sausages') ext = `Burgers & Sausages`;
                              }
                            }
                            let categId = '';
                            const matchedCategory = categoriesId.find((cat) => cat.name === category);
                            if (matchedCategory) {
                              categId = matchedCategory.id;
                            } else {
                              console.warn(`Category "${category}" not found in categoriesId`);
                            }
                            return {
                              source_url: href !== 'N/A' ? href : 'N/A',
                              category: category,
                              subCategory: sub,
                              extensionCategory: ext,
                              name: product.querySelector('.product__title')?.textContent.trim() || 'N/A',
                              image_url: product.querySelector('img[data-testid="product-image"]')?.src || 'N/A',
                              coles_product_id: coles_product_id,
                              category_id: categId,
                              barcode: '',
                              shop: 'coles',
                              weight: weight,
                              prices: getPrices(loc.location, priceInCents, pricePerUnit, unit),
                            };
                          });
                        },
                        category,
                        subCategory,
                        extensionCategory,
                        loc,
                        categoriesId
                      );

                      if (productData.length > 0) {
                        console.log('productdata', productData.length);
                        for (const data of productData) {
                          const q = await Product.findOne({
                            category: data.category,
                            subCategory: data.subCategory,
                            extensionCategory: data.extensionCategory,
                            coles_product_id: data.coles_product_id,
                          });
                          if (!q) {
                            const createdProduct = await Product.create({ ...data });
                          } else {
                            const updatedPrices = [...q.prices];
                            let priceUpdated = false;

                            for (let i = 0; i < updatedPrices.length; i++) {
                              if (updatedPrices[i].state.toLowerCase() === data.prices[0].state.toLowerCase()) {
                                // Compare location
                                updatedPrices[i].price = data.prices[0].price;
                                updatedPrices[i].price_per_unit = data.prices[0].price_per_unit;
                                updatedPrices[i].price_unit = data.prices[0].price_unit;
                                priceUpdated = true;
                                break;
                              }
                            }

                            // If no match, push the new price data
                            if (!priceUpdated) {
                              updatedPrices.push(data.prices[0]);
                            }

                            // Update the document in MongoDB
                            await Product.findByIdAndUpdate(q._id, { $set: { prices: updatedPrices } }, { new: true });
                            // await Product.findByIdAndUpdate(q._id, { $set: { prices: updatedPrice } }, { new: true })
                          }
                        }
                      } else {
                        break;
                      }
                      i = i + 1;
                      hasProducts = true;
                    }
                  } catch (error) {
                    console.error('error in while loop', error);
                  } finally {
                    if (page) {
                      console.log(`Closed page for child item: ${extensionCategory}`);
                      await page.close();
                    }
                  }
                  console.log('done Child Items:', extensionCategory);
                })
              );
              console.log('done Sub Category:', subCategory);
            })
          );
          console.log('done Category:', category);
        })
      );
    }
    console.log('done all');
  } catch (error) {
    console.error('Error:', error);
  }
};

(async () => {
  await scraper();
})();
