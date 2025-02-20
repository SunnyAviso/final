import categories from './constant/getProducts.js';
import fs from 'fs';
import path from 'path';
import Product from './models/products.js';
import dbConnect from './db/dbConnect.js';
import { createArrayCsvWriter } from 'csv-writer';
import dotenv from 'dotenv';

// const categoriesId = JSON.parse(fs.readFileSync(`./coles/constant/categories.js`, 'utf8'));
dotenv.config();
const csvWriter = createArrayCsvWriter({
  path: `./coles/output_${process.env.FOLDER_DATE}.csv`,
  header: ['Category', 'SubCategory', 'Extension', 'Products'],
});

const getData = async () => {
  await dbConnect();
  // let b;
  // b = await Product.find();
  let data = [];
  let total = 0;
  for (const categ of categories) {
    let category;
    category = categ.category;
    if (category === 'Chips, Chocolates & Snacks') category === 'Pantry';
    let categId = categ.id;

    const a = await Product.find({ category: category }).exec();
    const productsData = a.map((product) => {
      const productObj = product.toObject();
      if (productObj.prices.length === 0) return false;
      const cleanedPrices = productObj.prices.map((price) => {
        const { _id, ...rest } = price; // Destructure to exclude _id
        return rest; // Return the remaining price object without _id
      });
      let subId = '';
      let childId = '';
      const matchedCategory = categories.find((cat) => cat.category === category);
      if (matchedCategory) {
        const sub = matchedCategory.subCategories.find((sub) => sub.subCategory === productObj.subCategory);

        if (sub) {
          const a = sub.childItems.find((item) => item.extensionCategory === productObj.extensionCategory);
          if (a) {
            subId = a.subId ?? '';
            childId = a.childId ?? '';
          }
        }

        // if(sub){
        //     const a = sub.childItems.find((item) => item.extensionCategory === productObj.extensionCategory)
        //     if(a){
        //         subId = a.subId ?? '';
        //         childId = a.childId ?? '';
        //     }
        // }
      } else {
        console.warn(`Category "${category}" not found in categoriesId`);
      }
      const formattedProduct = {
        source_url: productObj.source_url || null,
        name: productObj.name || null,
        image_url: productObj.image_url || null,
        source_id: `${productObj.coles_product_id}` || null,
        barcode: productObj.barcode || '',
        category_id: categId || '',
        subcategory_id: subId || '',
        subsubcategory_id: childId || '',
        shop: productObj.shop || null,
        weight: productObj.weight || '',
        prices: cleanedPrices,
      };

      return formattedProduct;
    });
    if (productsData.length > 0) {
      const baseFolder = `./coles/data/${process.env.FOLDER_DATE}`;
      const folderPath = path.join(baseFolder);
      const toPush = [category, productsData.length];
      data.push(toPush);
      // Ensure the folder exists
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Created folder: ${folderPath}`);
      }

      const fileName = `${category}.json`;
      const filePath = path.join(folderPath, fileName);

      try {
        if (fs.existsSync(filePath)) {
          // Merge existing and new data
          try {
            console.log(`File already exists: ${filePath}. Skipping save.`);
            const data = await JSON.parse(fs.readFileSync(`${baseFolder}/${category}.json`, 'utf8'));
            const combinedData = [...data, ...productsData];

            // Remove duplicates based on source_id
            const singleProduct = productsData.reduce((acc, item) => {
              // Check if the product with the same source_id, shop, and IDs already exists
              const exists = acc.some(
                (t) =>
                  t.source_id === item.source_id &&
                  t.shop === item.shop &&
                  t.category_id === item.category_id &&
                  (t.subcategory_id === item.subcategory_id || (!t.subcategory_id && !item.subcategory_id)) &&
                  (t.subsubcategory_id === item.subsubcategory_id || (!t.subsubcategory_id && !item.subsubcategory_id))
              );

              // If it doesn't exist, add it and return only the first match
              if (!exists) acc.push(item);

              return acc;
            }, []);

            // Return only the first matched product
            const firstProduct = singleProduct.length > 0 ? singleProduct[0] : null;
            total += singleProduct.length;
            fs.writeFileSync(filePath, JSON.stringify(singleProduct, null, 2));
          } catch (error) {
            console.log('error');
          }
        } else {
          if (productsData.length > 0) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`Created folder: ${folderPath}`);
            const singleProduct = productsData.reduce((acc, item) => {
              // Check if the product with the same source_id, shop, and IDs already exists
              const exists = acc.some(
                (t) =>
                  t.source_id === item.source_id &&
                  t.shop === item.shop &&
                  t.category_id === item.category_id &&
                  (t.subcategory_id === item.subcategory_id || (!t.subcategory_id && !item.subcategory_id)) &&
                  (t.subsubcategory_id === item.subsubcategory_id || (!t.subsubcategory_id && !item.subsubcategory_id))
              );

              // If it doesn't exist, add it and return only the first match
              if (!exists) acc.push(item);

              return acc;
            }, []);

            // Return only the first matched product
            const firstProduct = singleProduct.length > 0 ? singleProduct[0] : null;
            console.log('singleProduct.length', singleProduct.length);
            total += singleProduct.length;
            fs.writeFileSync(filePath, JSON.stringify(singleProduct, null, 2));
            console.log(`Data saved to ${filePath}`);
          }
        }

        console.log('totalProducts', total);
      } catch (error) {
        console.error('Error writing data to file:', error);
      }
    }
  }
  // csvWriter
  //   .writeRecords(data)
  //   .then(() => {
  //     console.log('CSV file created successfully!');
  //   })
  //   .catch((err) => {
  //     console.error('Error writing CSV file:', err);
  //   });
};

(async () => {
  await getData();
})();
