import dotenv from 'dotenv';

dotenv.config();
import categories from './woolworths/constant/categories.js';
import fs from 'fs';
import path from 'path';

const getData = async () => {
  let totalProducts = 0;
  let products = [];
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
      ColesData = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${mycat}.json`, 'utf8'));
    } catch (error) {
      console.log('error parsing', mycat, error);
      continue;
    }
    for (const data of ColesData) {
      try {
        if (!data.source_url || data.source_url === 'N/A' || data.source_url === null) throw new Error(`No source URL, id: ${data.source_id}, category:${category}.json`);
        if (!data.image_url || data.image_url === 'N/A' || data.image_url === null) {
          products.push(data);
          throw new Error(`No image URL, id: ${data.source_id}, category:${category}.json`)
        };
      } catch (error) {
        console.log('error', error);
        continue;
      }
      //   try {
      //     if (data.prices && Array.isArray(data.prices)) {
      //       for (const priceEntry of data.prices) {
      //         // Parse the price and price_per_unit
      //         let price = parseFloat(priceEntry.price);
      //         let pricePerUnit = parseFloat(priceEntry.price_per_unit);

      //         // Check if price is a decimal
      //         if (!Number.isInteger(price)) {
      //           if (!Number.isNaN(price)) {
      //             price = Math.round(price * 100); // Convert to cents
      //             pricePerUnit = Math.round(pricePerUnit * 100);
      //           } else {
      //             priceEntry.price = '';
      //             priceEntry.price_per_unit = pricePerUnit.toString();
      //           }
      //         }
      //       }
      //     }
      //   } catch (priceError) {
      //     console.error(`Price issue detected: ${priceError.message}`);
      //     continue; // Skip this product if there are price issues
      //   }
      
    }
    try {
      // if (products && products.length > 0) {
      //   fs.writeFileSync(`coles/data/${process.env.FOLDER_DATE}/${category}/${category} - ${subCategory} - ${extensionCategory}.json`, JSON.stringify(products, null, 2)); // Pretty print with 2 spaces
      // }
    } catch (error) {
      console.error('Error writing data to file:', error);
    }
  }
  console.log('products have an error:', products.length);
};

(async () => {
  await getData();
})();
