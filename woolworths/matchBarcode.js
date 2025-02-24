import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Productw from './models/products.js'; // Ensure this model exists
import Productc from '.coles/models/products.js'; // Ensure this model exists
import dbConnectw from './db/dbConnect.js'; // Ensure this function connects to MongoDB Atlas
import dbConnectc from '.coles/db/dbConnect.js'; // Ensure this function connects to MongoDB Atlas

dotenv.config();

// const getData = async () => {
//   console.log('Connecting to MongoDB Atlas...');
  
//   await dbConnectw(); // Connect to MongoDB

//   try {
//     // Fetch all products from MongoDB
//     const products = await Productw.find().exec();

//     let counter = 1; // Initialize counter

//     console.log('Product Names:');
//     // Print product names with an incrementing counter
//     products.forEach((product) => {
//       console.log(counter++, product.name);
//     });

//   } catch (error) {
//     console.error('Error fetching data:', error);
//   } finally {
//     mongoose.connection.close(); // Close the connection
//     console.log('Connection closed.');
//   }
// };

const getData = async () => {
    console.log('Connecting to MongoDB Atlas...');
    
    await dbConnectc(); // Connect to MongoDB
  
    try {
      // Fetch all products
      const products = await Productc.find().exec();
  
      let counter = 1; // Initialize counter
  
      console.log('Product Names:');
      products.forEach((product) => {
        console.log(counter++, product.name);
      });
  
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      mongoose.connection.close(); // Close the connection
      console.log('Connection closed.');
    }
  };


(async () => {
  await getData();
})();
