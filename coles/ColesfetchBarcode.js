import axios from 'axios';
import axiosRetry from 'axios-retry';
import Product from './models/products.js';
import dbConnect from './db/dbConnect.js';
import dotenv from 'dotenv';

dotenv.config();
import mongoose from 'mongoose';

// const Colesbarcode = mongoose.model('colesbarcode', barcodeSchema);

const db2 = async () => {
  try {
    console.log('Database Name:', process.env.MONGO_COLES_BARCODE);

    const barcodeDB = mongoose.createConnection(`${process.env.MONGO_COLES_BARCODE}`);
    // barcodeDB.on('connected', () => console.log('Connected to Barcode Database'));

    return barcodeDB;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
const barcodeSchema = new mongoose.Schema(
  {
    coles_product_id: { type: String },
    barcode: { type: String },
  },
  { timestamps: true }
);

const axiosInstance = axios.create({
  timeout: 60000, // 10 seconds
});

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

axiosRetry(axiosInstance, {
  retries: 15, // Number of retries
  retryDelay: (retryCount) => retryCount * 3000,
  retryCondition: (error) => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error);
  },
});

const getBarcode = async () => {
  try {
    await dbConnect();
    const db = await db2();
    const ColesBarcode = db.model('ColesBarcode', barcodeSchema);
    // const products = await Product.find().limit(3000);
    const products = await Product.find({
      $or: [
        { barcode: null },         // Matches explicitly null values
        { barcode: { $exists: false } }, // Matches documents where barcode is missing
        { barcode: "" }            // (Optional) Matches empty string values if applicable
      ]
    }); // 19294
    // const products = await Product.find().skip(34285).limit(1000);
    
    // Step 2: Find barcodes where coles_product_id is NOT in the Product list
    // const barcodesWithoutProducts = await ColesBarcode.find({
    //   coles_product_id: { $nin: productIds }, // Exclude existing product IDs
    // });
    console.log('products length:', products.length);

    let i = 1;
    await Promise.allSettled(
      products.map(async (product, index) => {
        // for (const product of products) {
        // await delay(5000)
        // for (const product of products) {
        try {
          const barcode = await ColesBarcode.findOne({ coles_product_id: product.coles_product_id });
          if (!barcode) {
            const { data } = await axiosInstance.get(`https://barcodes.groceryscraper.mc.hzuccon.com/barcode?product=${product.coles_product_id}`);
            console.log(`data${i}`, `${data}-${product.name}`);
            product.barcode = data;
            const barcodes = new ColesBarcode({ coles_product_id: product.coles_product_id, barcode: data });
            await barcodes.save();
          } else {
            // console.log(`data${i}`, `${barcode.barcode}-${product.name}`);
            console.log('barcodes', barcode);
            product.barcode = barcode.barcode;
          }
          /**
           * 1. check id exist in db
           * 2. if not save the id with barcode
           */
          
          await product.save();
        } catch (error) {
          console.log('no product barcode found', 'skip');
        }
        i++;
        // }
      })
    );
    return;
  } catch (err) {
    console.error('Error Details:', {
      message: err.message,
      config: err.config,
      code: err.code,
      response: err.response?.data,
    });
    return '';
  }
};

(async () => {
  const a = await getBarcode();
  console.log('a', a);
})();
