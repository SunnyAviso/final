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
                  if (ext?.url) url = ext?.url;
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

                            // // baby category
                            // if (subCategory === 'Nappies & Nappy Pants') sub = 'Nappies Wipes';
                            // // if (extensionCategory === 'Specialty Formula') ext = 'Specialty'
                            // if (extensionCategory === 'Swimmers') ext = 'Swimming Nappies';

                            // // bakery category
                            // if (subCategory === 'In-Store Bakery') {
                            //   sub = `In-Store Bakery`;
                            //   if (ext === 'Donuts') ext = 'Donuts & Cookies';
                            //   if (ext === 'Cookies') ext = 'Donuts & Cookies';
                            // }
                            // if (subCategory === 'Packaged Bread & Bakery') {
                            //   sub = `Packaged Bread & Bakery`;
                            // }

                            // // category Dairy, Eggs & Fridge
                            // if (category === 'Dairy, Eggs & Fridge') {
                            //   if (subCategory === 'Dips & Pate') {
                            //     if (extensionCategory === 'Pate') ext = 'Pate, Paste & Caviar';
                            //     if (extensionCategory === 'Paste') ext = 'Pate, Paste & Caviar';
                            //   }
                            // }
                            // // category Drinks
                            // if (category === 'Drinks') {
                            //   if (subCategory === 'Chilled Drinks') {
                            //     if (extensionCategory === 'Soft Drinks' || extensionCategory === 'Energy Drinks') ext = 'Chilled Soft Drinks & Energy Drinks';
                            //   }
                            // }
                            // // category Freezer
                            // if (category === 'Freezer') {
                            //   if (subCategory === 'Frozen Fruit') {
                            //     if (extensionCategory === 'Berries' || extensionCategory === 'Tropical') ext = 'Berries & Tropical';
                            //   }
                            //   if (subCategory === 'Frozen Party Food') {
                            //     if (extensionCategory === 'Pastries' || extensionCategory === 'Pies & Quiches') ext = 'Pies, Pastries & Quiches';
                            //   }
                            //   if (subCategory === 'Frozen Vegetables') {
                            //     if (extensionCategory === 'Beans' || extensionCategory === 'Peas') ext = 'Beans & Peas';
                            //   }
                            // }
                            // // category Fruit & Veg
                            // if (category === 'Fruit & Veg') {
                            //   if (subCategory === 'Fruit') {
                            //     if (extensionCategory === 'Apples' || extensionCategory === 'Pears') ext = 'Apples & Pears';
                            //     if (extensionCategory === 'Melons' || extensionCategory === 'Mangoes') ext = 'Melons & Mangoes';
                            //     if (extensionCategory === 'Pineapples' || extensionCategory === 'Kiwi Fruit') ext = 'Pineapples & Kiwi Fruit';
                            //   }
                            //   if (subCategory === 'Vegetables') {
                            //     if (extensionCategory === 'Potatoes' || extensionCategory === 'Pumpkins') ext = 'Potatoes & Pumpkins';
                            //     if (extensionCategory === 'Eggplant' || extensionCategory === 'Zucchini & Squash') ext = 'Zucchini, Eggplant & Squash';
                            //   }
                            // }
                            // // category Household
                            // if (category === 'Household') {
                            //   if (subCategory === 'Laundry') {
                            //     if (extensionCategory === 'Ironing' || extensionCategory === 'Accessories') ext = `Ironing & Accessories`;
                            //   }
                            // }
                            // // category Pantry
                            // if (category === 'Pantry') {
                            //   if (subCategory === 'Breakfast & Spreads') {
                            //     if (extensionCategory === 'Muesli' || extensionCategory === 'Oats') ext = `Muesli & Oats`;
                            //   }
                            // }
                            // // category Poultry, Meat & Seafood
                            // if (category === 'Poultry, Meat & Seafood') {
                            //   if (subCategory === 'BBQ Meat & Seafood') {
                            //     if (extensionCategory === 'Burgers' || extensionCategory === 'Sausages') ext = `Burgers & Sausages`;
                            //   }
                            // }
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
                              prices: getPrices(loc.location, pricePerUnit, priceInCents, unit),
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
