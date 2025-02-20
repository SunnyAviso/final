import fs from 'fs';
import categories from './constant/copy.js';
let total = 0;
for (const cat of categories) {
  let data = [];
  data = JSON.parse(fs.readFileSync(`matched/1-22-2025/Bakery/Bakery - Packaged Bread & Bakery - Packaged Bread.json`, 'utf8'));
console.log('data', data.length);
  // try {
  //   data = JSON.parse(fs.readFileSync(`matched/2-5-2025/${cat.category}.json`, 'utf8'));
  //   total += data.length;
  //   console.log(`category: ${cat.category} total: ${data.length}`);
  // } catch (error) {
  //   console.log(`Error reading ${cat.category}`);
  //   continue;
  // }
}
console.log(total);
