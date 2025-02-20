import categories from './constant/categories.js';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Product from './models/products.js';
import cleanUpPrices from './clean.js';
import dbConnect from './db/dbConnect.js';
import { createArrayCsvWriter } from 'csv-writer';
import dotenv from 'dotenv';

dotenv.config();
const csvWriter = createArrayCsvWriter({
  path: `./woolworths/output_${process.env.FOLDER_DATE}.csv`,
  header: ['Category', 'SubCategory', 'Extension', 'Products'],
});

const getData = async () => {
  console.log('start clean');
  await cleanUpPrices();
  console.log('end clean');
  await dbConnect();
  const a = await Product.find().exec();
  let total = 0;
  let data = [];
  for (const categ of categories) {
    const category = categ.category;
    let categId = categ.id;

    for (const sub of categ.subCategories) {
      const subCategory = sub.subCategory;
      for (const ext of sub.childItems) {
        const extensionCategory = ext.extensionCategory ? ext.extensionCategory : '';
        const filteredProducts = a.filter((product) => {
          // Parse the stringified arrays
          const parsedFields = {
            productCategories: product.category.flatMap((cat) => JSON.parse(cat)),
            productSubCategories: product.subCategory.flatMap((sub) => JSON.parse(sub)),
            productExtensionSubCategories: product.extensionCategory.flatMap((ext) => JSON.parse(ext)),
          };

          // console.log('mycat', mycat)
          // First, check if category matches
          const hasCategory = parsedFields.productCategories.some((cat) => cat.toLowerCase().replace(/\s{2,}/g, ' ') === category.toLowerCase().replace(/\s{2,}/g, ' '));
          if (!hasCategory) return false;

          let mySubCategory;
          mySubCategory = subCategory;
          const hasSubCategory = parsedFields.productSubCategories.some((sub) => sub.toLowerCase().replace(/\s{2,}/g, ' ') === mySubCategory.toLowerCase().replace(/\s{2,}/g, ' '));

          if (!hasSubCategory) return false;

          let mySubCategoryExtension;
          mySubCategoryExtension = extensionCategory;
          const hasExtensionSubCategories = parsedFields.productExtensionSubCategories.some(
            (ext) =>
              ext
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/\s{2,}/g, ' ') ===
              mySubCategoryExtension
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/\s{2,}/g, ' ')
          );

          return hasExtensionSubCategories;
        });

        let mycat = category;
        mycat = category;
        if (category === 'Snacks & Confectionery') mycat = 'Pantry';
        if (category === 'Deli & Chilled Meals') mycat = 'Deli & Chilled Meats';
        if (category === 'Health & Wellness') mycat = 'Health & Beauty';
        if (category === 'Beauty') mycat = 'Health & Beauty';
        if (category === 'Personal Care') mycat = 'Health & Beauty';
        if (category === 'Home & Lifestyle') mycat = 'Household';
        if (category === 'Cleaning & Maintenance') mycat = 'Household';

        if (category === 'Electronics') mycat = 'Household';
        if (category === 'Beer, Wine & Spirits') mycat = 'Liquor';
        const toPush = [mycat, filteredProducts.length];
        data.push(toPush);
        const productsData = filteredProducts.map((product) => {
          const productObj = product.toObject();
          // console.log('productObj', productObj)
          const filteredPrices = productObj.prices.filter((p) => p !== null && p !== undefined);
          const cleanedPrices = filteredPrices.map((price) => {
            if (!price || price === null) return;
            const { _id, ...rest } = price; // Destructure to exclude _id
            return rest; // Return the remaining price object without _id
          });

          const formattedProduct = {
            source_url: productObj.source_url || null,
            name: productObj.name || null,
            image_url: productObj.image_url || null,
            source_id: `${productObj.retailer_product_id}` || null,
            barcode: productObj.barcode || null,
            category_id: categId || '',
            subcategory_id: ext.subId || '',
            subsubcategory_id: ext.childId || '',
            shop: productObj.shop || null,
            weight: productObj.weight || null,
            prices: cleanedPrices,
          };

          return formattedProduct;
        });
        // console.log('Filtered product format:', productsData[0])
        if (productsData && productsData.length > 0) {
          
          const baseFolder = `./woolworths/data/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categId}`;
          const folderPath = path.join(baseFolder);

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            // console.log(`Created folder: ${folderPath}`);
          }
          if (ext.subId) {
            total += productsData.length;
            const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
            const filePath = path.join(folderPath, fileName);
            if (fs.existsSync(filePath)) {
              // console.log(`File already exists: ${filePath}. Skipping save.`);
              const data = JSON.parse(fs.readFileSync(`woolworths/data/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categId}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));

              // Merge existing and new data
              const combinedData = [...data, ...productsData];

              // Remove duplicates based on source_id
              const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id));

              fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
              // return; // Skip saving the file
            } else {
              try {
                // console.log(`${fileName} - ${productsData.length} products`);
                fs.writeFileSync(filePath, JSON.stringify(productsData, null, 2));
                // console.log(`Data saved to ${filePath}`);
              } catch (error) {
                console.error('Error writing data to file:', error);
              }
            }
          }
        } else {
          console.log(`no products found in ${mycat} ${subCategory} ${extensionCategory}`);
        }
      }
    }
  }
  console.log('total', total);
  csvWriter
    .writeRecords(data)
    .then(() => {
      console.log('CSV file created successfully!');
    })
    .catch((err) => {
      console.error('Error writing CSV file:', err);
    });
};

(async () => {
  await getData();
})();
