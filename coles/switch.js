import mongoose from 'mongoose';
import fs from 'fs/promises';
import dbConnect from './db/dbConnect.js';
import Product from './models/products.js';

const cleanUpPrices = async () => {
  await dbConnect();

  // Fetch all products
  const products = await Product.find();
  console.log('p', products.length)
  // try {
  //     await fs.writeFile('products_backup.json', JSON.stringify(products, null, 2), 'utf-8');
  //     console.log('Backup created successfully: products_backup.json');
  // } catch (error) {
  //     console.error('Failed to create backup:', error.message);
  //     process.exit(1); // Exit to avoid making changes without a backup
  // }
  try {
    for (const product of products) {
        let isModified = false;
        for (const price of product.prices) {
          const temp = price.price || null;
          price.price = price.price_per_unit || null;
          price.price_per_unit = temp;
          isModified = true;
        }
    
        if (isModified) {
          await product.save();
          console.log(`Updated prices for product ID: ${product.coles_product_id}`);
        }
      }
  } catch (error) {
    console.log('error', error)
  }

  console.log('Finished cleaning up all products.');
  process.exit(0);
};

cleanUpPrices();
