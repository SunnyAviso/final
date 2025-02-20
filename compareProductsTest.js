import dotenv from 'dotenv';

dotenv.config();
import categories from './woolworths/constant/categories.js';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
const MYCATEGORIES = JSON.parse(fs.readFileSync(`constant/categories.json`, 'utf8'));
const getData = async () => {
  let totalProducts = 0;
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
    try {
      const a = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${mycat}.json`, 'utf8'));
      ColesData = a.filter((p) => p.subcategory_id !== '');
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
        let woolworthsData;

        try {
          woolworthsData = JSON.parse(fs.readFileSync(`woolworths/data/${process.env.FOLDER_DATE}/${categ.id}/${ext.subId ?? ''}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
          // console.log('woolworthsData', woolworthsData.length);
        } catch (error) {
          continue;
        }
        for (const data of woolworthsData) {
          const filteredProducts = ColesData.filter((p) => {
            if (p.barcode && data.barcode) {
              if (p.barcode.toString() === data.barcode.toString()) {
                return p;
              }
            } else {
            }
          });
          if (filteredProducts && filteredProducts.length > 0) {
            if (filteredProducts[0].subcategory_id) {
              const cleanPrices = (prices) => (prices ? prices.filter((priceObj) => priceObj.price !== null) : []);

              const filteredPrices1 = cleanPrices(filteredProducts[0].prices);
              const filteredPrices2 = cleanPrices(data.prices);

              // If both cleaned prices arrays are empty, do not add to productsMatched
              if (filteredPrices1.length > 0 && filteredPrices2.length > 0) {
                const formattedProduct1 = {
                  source_url: filteredProducts[0].source_url || '',
                  name: filteredProducts[0].name || '',
                  image_url: filteredProducts[0].image_url || '',
                  source_id: filteredProducts[0].source_id || '',
                  barcode: filteredProducts[0].barcode || '',
                  shop: filteredProducts[0].shop || '',
                  category_id: data.subsubcategory_id ? data.subsubcategory_id : data.subcategory_id,
                  weight: filteredProducts[0].weight || '',
                  prices: cleanPrices(filteredProducts[0].prices),
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
        }

        try {
          // now we need to do a filteredProductsMatched id seen in "woolworthsData" variable will be removed so we can know what products in woolworths doesnt match
          if (productsMatched && productsMatched.length > 0) {
            const baseFolder = `./matched/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}`;
            const folderPath = path.join(baseFolder);
            const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
            const filePath = path.join(folderPath, fileName);
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true });
              // console.log(`Created folder: ${folderPath}`);
            }
            if (fs.existsSync(filePath)) {
              // console.log(`File already exists: ${filePath}. Skipping save.`);
              const data = JSON.parse(fs.readFileSync(`matched/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
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
          }
        } catch (error) {
          console.error('Error writing data to file:', error);
        }
      }
    }
  }

  /**
   * This is for matched products to push in API
   */
  const chunkSize = 100;
  const skipCount = 0; //
  for (const categ of MYCATEGORIES) {
    for (const sub of categ.children) {
      for (const ext of sub.children) {
        let matchedData = [];
        try {
          matchedData = JSON.parse(fs.readFileSync(`matched/${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, 'utf8'));
          // console.log('matched', matchedData.length);
        } catch (error) {
          console.log('error', `${sub.id ?? ''}${ext.id && ` - ${ext.id}`}`);
          continue;
        }
        totalProducts += matchedData.length;
        const chunk = matchedData.slice(skipCount, skipCount + chunkSize);
        for (let i = skipCount; i < matchedData.length; i += chunkSize) {
          // this is the loop to where it should be uploaded
        }
      }
    }
  }

  console.log('totalProductsMatched', totalProducts);
  console.log('all done');
};

(async () => {
  await getData();
})();
