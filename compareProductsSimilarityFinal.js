import dotenv from 'dotenv';

dotenv.config();
import categories from './woolworths/constant/categories.js';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { search } from 'fast-fuzzy';
const MYCATEGORIES = JSON.parse(fs.readFileSync(`constant/categories.json`, 'utf8'));
const getData = async () => {
  let totalProducts = 0;
  let totalProductsUnmatchedInC = 0;
  let totalProductsUnmatchedInW = 0;
  for (const categ of categories) {
    const category = categ.category;
    let mycat = category;
    mycat = category;
    let ColesData;
    if (category === 'Snacks & Confectionery') mycat = 'Pantry';
    if (category === 'Deli & Chilled Meals') mycat = 'Deli & Chilled Meats';
    if (category === 'Health & Wellness') mycat = 'Health & Beauty';
    if (category === 'Beauty & Personal Care') mycat = 'Health & Beauty';
    if (category === 'Home & Lifestyle') mycat = 'Household';
    if (category === 'Cleaning & Maintenance') mycat = 'Household';
    if (category === 'Fruit & Veg') mycat = 'Fruit & Vegetables';
    if (category === 'Freezer') mycat = 'Frozen';
    if (category === 'Deli & Chilled Meals') mycat = 'Deli';
    let d;
    try {
      d = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${mycat}.json`, 'utf8'));
      ColesData = d.filter((p) => p.subcategory_id !== '');
      // console.log('cole', ColesData.length);
    } catch (error) {
      console.log(`Skipping ${mycat}: File(s) missing.`);
      continue;
    }
    for (const sub of categ.subCategories) {
      const subCategory = sub.subCategory;
      for (const ext of sub.childItems) {
        const extensionCategory = ext.extensionCategory ? ext.extensionCategory : '';
        let productsMatched = [];
        let woolworthsData = [];
        let woolworthsDataToBeMatched = [];
        let colesFilteredWithoutBarcode = [];
        let colesDataToBeMatched = [];
        let productsDataMatched = [];

        try {
          woolworthsData = JSON.parse(fs.readFileSync(`woolworths/data/${process.env.FOLDER_DATE}/${categ.id}/${ext.subId ?? ''}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
        } catch (error) {
          continue;
        }
        try {
          try {
            productsDataMatched = JSON.parse(fs.readFileSync(`matched/${process.env.FOLDER_DATE}/${categ.id}/${ext.subId ?? ''}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
          } catch (error) {}
          const matchedSourceIds = new Set(productsDataMatched.map((data) => data.source_id.toString()));
          woolworthsDataToBeMatched = woolworthsData.filter((p) => {
            return matchedSourceIds.has(p.source_id.toString()) ? false : true;
          });
          colesFilteredWithoutBarcode = await ColesData.filter((p) => !p.barcode || p.barcode === '');
          colesDataToBeMatched = productsDataMatched.filter((p) => {
            return matchedSourceIds.has(p.source_id.toString()) ? false : true;
          });
        } catch (error) {
          console.log('skipping', error);
        }
        const filteredColesData = colesFilteredWithoutBarcode;
        const filteredwoolworthsData = woolworthsDataToBeMatched;

        for (const data of filteredwoolworthsData) {
          // console.log('filtering', filteredColesData)
          const a = search(data.name, filteredColesData, { keySelector: (obj) => obj.name, returnMatchData: true });
          if (a.length > 0) {
            const filteredMatches = a.filter((match) => match.score >= 0.95);
            // const filteredMatches = a.filter((match) => match.score >= 0.9 && match.score < 0.95);
            if (filteredMatches && filteredMatches.length === 0) continue;
            const bestMatch = filteredMatches[0].item;
            const cleanPrices = (prices) => (prices ? prices.filter((priceObj) => priceObj.price !== null) : []);

            const filteredPrices1 = cleanPrices(bestMatch.prices);
            const filteredPrices2 = cleanPrices(data.prices);

            // If both cleaned prices arrays are empty, do not add to productsMatched
            if (filteredPrices1.length > 0 && filteredPrices2.length > 0) {
              const formattedProduct1 = {
                source_url: bestMatch.source_url || '',
                name: bestMatch.name || '',
                image_url: bestMatch.image_url || '',
                source_id: bestMatch.source_id || '',
                barcode: data.barcode || '',
                shop: bestMatch.shop || '',
                category_id: data.subsubcategory_id ? data.subsubcategory_id : data.subcategory_id,
                weight: bestMatch.weight || '',
                prices: filteredPrices1,
              };
              const formattedProduct2 = {
                source_url: data.source_url || '',
                name: data.name || '',
                image_url: data.image_url || '',
                source_id: data.source_id || '',
                barcode: data.barcode || '',
                shop: data.shop || '',
                category_id: data.subsubcategory_id ? data.subsubcategory_id : data.subcategory_id,
                weight: data.weight || '',
                prices: cleanPrices(data.prices),
              };
              productsMatched.push(formattedProduct1);
              productsMatched.push(formattedProduct2);
            }
          }
        }

        try {
          const a = productsMatched.filter((p) => p.shop === 'Woolworths');
          let c;
          try {
            const filePath = `matched/${process.env.FOLDER_DATE}/${ext.catId || categ.id}/${ext.subId}${ext.childId ? ` - ${ext.childId}` : ''}.json`;
            c = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          } catch (error) {
            // console.error('Skip:', `${ext.catId || categ.id}/${ext.subId}${ext.childId ? ` - ${ext.childId}` : ''}`); // Logs the error for debugging
            c = []; // Set to an empty array if an error occurs
          }

          const filteredProductsMatched = [...(Array.isArray(c) ? c : []), ...a];

          // Remove matched products from woolworthsData to get only unmatched products
          const unmatchedWoolworthsProducts = woolworthsData.filter((w) => !filteredProductsMatched.some((p) => p.source_id === w.source_id));

          // now we need to do a filteredProductsMatched id seen in "woolworthsData" variable will be removed so we can know what products in woolworths doesnt match
          if (productsMatched && productsMatched.length > 0) {
            const baseFolder = `./similar/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}`;
            const folderPath = path.join(baseFolder);
            const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
            const filePath = path.join(folderPath, fileName);
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true });
              // console.log(`Created folder: ${folderPath}`);
            }
            if (fs.existsSync(filePath)) {
              // console.log(`File already exists: ${filePath}. Skipping save.`);
              const data = JSON.parse(fs.readFileSync(`similar/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
              const combinedData = [...data, ...productsMatched];

              // Remove duplicates based on source_id
              const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id && t.shop === item.shop));
              fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
            } else {
              fs.mkdirSync(folderPath, { recursive: true });
              // console.log(`Created folder: ${folderPath}`);
              fs.writeFileSync(filePath, JSON.stringify(productsMatched, null, 2));
              // console.log(`Data saved to ${filePath}`);
            }
            /**
             * 1. get
             */
          }
          let unMatchedColes = [];
          let formattedProducts = [];
          try {
            const b = productsMatched.filter((p) => p.shop.toLowerCase() === 'coles'); // this is similar + matched
            let c;
            try {
              const filePath = `matched/${process.env.FOLDER_DATE}/${ext.catId || categ.id}/${ext.subId}${ext.childId ? ` - ${ext.childId}` : ''}.json`;
              c = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            } catch (error) {
              console.error('No file found:', `matched/${ext.catId || categ.id}/${ext.subId}${ext.childId ? ` - ${ext.childId}` : ''}`); // Logs the error for debugging
              c = []; // Set to an empty array if an error occurs
            }

            const filteredProductsMatched = [...(Array.isArray(c) ? c : []), ...b];
            let a = [];
            if (ext?.subId) {
              if (ext.childId) {
                a = await ColesData.filter((p) => p.shop.toLowerCase() === 'coles' && ext?.subId === p.subcategory_id && ext?.childId === p.subsubcategory_id);
              } else {
                a = await ColesData.filter((p) => p.shop.toLowerCase() === 'coles' && ext?.subId === p.subcategory_id);
              }
            }
            unMatchedColes = a.filter((c) => !filteredProductsMatched.some((p) => p.source_id === c.source_id));
            if (unMatchedColes.length > 0) {
              for (const data of unMatchedColes) {
                if (data.subcategory_id) {
                  if (data?.prices?.length > 0) {
                    const cleanPrices = (prices) => (prices ? prices.filter((priceObj) => priceObj.price !== null) : []);

                    const filteredPrices1 = cleanPrices(data.prices);

                    // If both cleaned prices arrays are empty, do not add to productsMatched
                    if (filteredPrices1.length > 0) {
                      const formattedProduct = {
                        source_url: data.source_url || '',
                        name: data.name || '',
                        image_url: data.image_url || '',
                        source_id: data.source_id || '',
                        barcode: data.barcode || '',
                        shop: data.shop || '',
                        category_id: data.subsubcategory_id ? data.subsubcategory_id : data.subcategory_id,
                        weight: data.weight || '',
                        prices: filteredPrices1,
                      };
                      formattedProducts.push(formattedProduct);
                    }
                  }
                }
              }
              const baseFolder = `./unMatched/coles/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}`;
              const folderPath = path.join(baseFolder);
              if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, { recursive: true });
              }
              const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
              const filePath = path.join(folderPath, fileName);
              if (fs.existsSync(filePath)) {
                // Merge existing and new data
                const data = JSON.parse(fs.readFileSync(`unMatched/coles/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
                const combinedData = [...data, ...formattedProducts];

                // Remove duplicates based on source_id
                const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id && t.shop === item.shop));
                fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
              } else {
                if (unMatchedColes.length > 0) {
                  fs.mkdirSync(folderPath, { recursive: true });

                  fs.writeFileSync(filePath, JSON.stringify(formattedProducts, null, 2));
                }
              }
            }
          } catch (error) {
            //   console.log('error', error);
          }
          let formattedUnmatchedWooly = [];
          if (unmatchedWoolworthsProducts && unmatchedWoolworthsProducts.length > 0) {
            for (const data of unmatchedWoolworthsProducts) {
              if (data.subcategory_id) {
                if (data?.prices?.length > 0) {
                  const cleanPrices = (prices) => (prices ? prices.filter((priceObj) => priceObj.price !== null) : []);

                  const filteredPrices1 = cleanPrices(data.prices);

                  // If both cleaned prices arrays are empty, do not add to productsMatched
                  if (filteredPrices1.length > 0) {
                    const formattedProduct = {
                      source_url: data.source_url || '',
                      name: data.name || '',
                      image_url: data.image_url || '',
                      source_id: data.source_id || '',
                      barcode: data.barcode || '',
                      shop: data.shop || '',
                      category_id: data.subsubcategory_id ? data.subsubcategory_id : data.subcategory_id,
                      weight: data.weight || '',
                      prices: filteredPrices1,
                    };
                    formattedUnmatchedWooly.push(formattedProduct);
                  }
                }
              }
            }
            const baseFolder = `./unMatched/woolworths/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}`;
            const folderPath = path.join(baseFolder);
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true });
            }
            const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
            const filePath = path.join(folderPath, fileName);
            if (fs.existsSync(filePath)) {
              // Merge existing and new data
              const data = JSON.parse(fs.readFileSync(`unMatched/woolworths/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
              const combinedData = [...data, ...formattedUnmatchedWooly];

              // Remove duplicates based on source_id
              const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id && t.shop === item.shop));
              fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
            } else {
              if (formattedUnmatchedWooly.length > 0) {
                fs.mkdirSync(folderPath, { recursive: true });
                fs.writeFileSync(filePath, JSON.stringify(formattedUnmatchedWooly, null, 2));
              }
            }
          }
        } catch (error) {
          console.error('Error writing data to file:', error);
        }
      }
    }
  }

  /**
   * This is for similar matched products to push in API
   */
  const chunkSize = 100;
  const skipCount = 0; //
  for (const categ of MYCATEGORIES) {
    for (const sub of categ.children) {
      for (const ext of sub.children) {
        let matchedData = [];
        try {
          matchedData = JSON.parse(fs.readFileSync(`similar/${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, 'utf8'));
          // console.log('matched', matchedData.length);
        } catch (error) {
          //   console.log('error', `${sub.id ?? ''}${ext.id && ` - ${ext.id}`}`);
          continue;
        }
        totalProducts += matchedData.length;
        const chunk = matchedData.slice(skipCount, skipCount + chunkSize);
        for (let i = skipCount; i < matchedData.length; i += chunkSize) {
          try {
            const externalApiUrl = process.env.JARROD_API;
            const apiKey = process.env.JARROD_KEY;
            const response = await axios.post(externalApiUrl, chunk, {
              headers: {
                accept: 'application/json',
                'X-API-Key': apiKey,
                'Content-Type': 'application/json',
              },
            });
            console.log(`Success! category: ${categ.id} Batch in  ${i / chunkSize + 1}`, response.data);
          } catch (error) {
            if (error.response) {
              console.error('Error response in matched:', `${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, error.response.status, error.response.data);
            } else if (error.request) {
              console.error('No response received in matched:', `${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, error.request);
            } else {
              console.error('Error in matched:', error.message);
            }
          }
        }
      }
    }
  }

  /**
   * This is for unmatched products in coles to push in API
   */
  const chunkSize1 = 100;
  const skipCount1 = 0;
  for (const categ of MYCATEGORIES) {
    for (const sub of categ.children) {
      for (const ext of sub.children) {
        let matchedData = [];
        try {
          matchedData = JSON.parse(fs.readFileSync(`unMatched/coles/${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, 'utf8'));
          console.log('unMatchedColes', matchedData.length);
        } catch (error) {
          continue;
        }
        totalProductsUnmatchedInC += matchedData.length;
        const chunk = matchedData.slice(skipCount1, skipCount1 + chunkSize1);
        for (let i = skipCount1; i < matchedData.length; i += chunkSize1) {
          try {
            const externalApiUrl = process.env.JARROD_API;
            const apiKey = process.env.JARROD_KEY;
            const response = await axios.post(externalApiUrl, chunk, {
              headers: {
                accept: 'application/json',
                'X-API-Key': apiKey,
                'Content-Type': 'application/json',
              },
            });
            console.log(`Success in C! category: ${categ.id} Batch in  ${i / chunkSize1 + 1}`, response.data);
          } catch (error) {
            if (error.response) {
              console.error('Error response in C:', `${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, error.response.status, error.response.data);
            } else if (error.request) {
              console.error('No response received in C:', `${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, error.request);
            } else {
              console.error('Error in C:', error.message);
            }
          }
        }
      }
    }
  }

  /**
   * This is for unmatched products in woolworths to push in API
   */
  const chunkSize2 = 100;
  const skipCount2 = 0;
  for (const categ of MYCATEGORIES) {
    for (const sub of categ.children) {
      for (const ext of sub.children) {
        let matchedData = [];
        try {
          matchedData = JSON.parse(fs.readFileSync(`unMatched/woolworths/${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, 'utf8'));
          console.log('unMatchedWoolworths', matchedData.length);
        } catch (error) {
          continue;
        }
        totalProductsUnmatchedInW += matchedData.length;
        const chunk = matchedData.slice(skipCount2, skipCount2 + chunkSize2);
        for (let i = skipCount2; i < matchedData.length; i += chunkSize2) {
          try {
            const externalApiUrl = process.env.JARROD_API;
            const apiKey = process.env.JARROD_KEY;
            const response = await axios.post(externalApiUrl, chunk, {
              headers: {
                accept: 'application/json',
                'X-API-Key': apiKey,
                'Content-Type': 'application/json',
              },
            });
            console.log(`Success in W! category: ${categ.id} Batch in  ${i / chunkSize2 + 1}`, response.data);
          } catch (error) {
            if (error.response) {
              console.error('Error response in W:', `${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, error.response.status, error.response.data);
            } else if (error.request) {
              console.error('No response received in W:', `${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, error.request);
            } else {
              console.error('Error in W:', error.message);
            }
          }
        }
      }
    }
  }
  console.log('totalProductsSimilarMatched', totalProducts);
  console.log('totalProductsUnmatchedInC', totalProductsUnmatchedInC);
  console.log('totalProductsUnmatchedInW', totalProductsUnmatchedInW);
};

(async () => {
  await getData();
})();
