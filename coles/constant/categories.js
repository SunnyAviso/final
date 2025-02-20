const categories = [
  // {
  //   category: 'Baby',

  //   subCategories: [
  //     // {
  //     //   subCategory: 'Baby Accessories',
  //     //   childItems: [
  //     //     { extensionCategory: 'Baby Grooming & Oral Care', url: 'https://www.coles.com.au/browse/baby/baby-accessories/baby-grooming-oral-care' },
  //     //     { extensionCategory: 'Baby Health & Safety', url: 'https://www.coles.com.au/browse/baby/baby-accessories/baby-health-safety' },
  //     //     { extensionCategory: 'Nappy Change Accessories', url: 'https://www.coles.com.au/browse/baby/baby-accessories/nappy-change-accessories' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Baby Formula',
  //     //   childItems: [
  //     //     { extensionCategory: 'A2 Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/a2-formula' },
  //     //     { extensionCategory: 'Cow Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/cow-formula' },
  //     //     { extensionCategory: 'Goat Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/goat-formula' },
  //     //     { extensionCategory: 'Organic Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/organic-formula' },
  //     //     { extensionCategory: 'Specialty Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/specialty-formula' },
  //     // ],
  //     // },
  //     // {
  //     //   subCategory: 'Nappies & Nappy Pants',
  //     //   childItems: [
  //     //     { extensionCategory: 'Bed Mats', url: 'https://www.coles.com.au/browse/baby/nappies-nappy-pants/bed-mats' },
  //     //     { extensionCategory: 'Eco Friendly Nappies', url: 'https://www.coles.com.au/browse/baby/nappies-nappy-pants/eco-friendly-nappies' },
  //     //     { extensionCategory: 'Nappies', url: 'https://www.coles.com.au/browse/baby/nappies-nappy-pants/nappies' },
  //     //     { extensionCategory: 'Nappy Pants', url: 'https://www.coles.com.au/browse/baby/nappies-nappy-pants/nappy-pants' },
  //     //     { extensionCategory: 'Night Pants', url: 'https://www.coles.com.au/browse/baby/nappies-nappy-pants/night-pants' },
  //     //     { extensionCategory: 'Reusable Nappies', url: 'https://www.coles.com.au/browse/baby/nappies-nappy-pants/reusable-nappies' },
  //     //     { extensionCategory: 'Swimmers', url: 'https://www.coles.com.au/browse/baby/nappies-nappy-pants/swimmers' },
  //     //   ],
  //     // },
  //     {
  //       subCategory: 'Baby Wipes',
  //       childItems: [
  //         { extensionCategory: 'Extra Large Pack', url: 'https://www.coles.com.au/browse/baby/baby-wipes/extra-large-pack' },
  //         { extensionCategory: 'Large Pack', url: 'http://coles.com.au/browse/baby/baby-wipes/large-pack' },
  //         { extensionCategory: 'Medium Pack', url: 'https://www.coles.com.au/browse/baby/baby-wipes/medium-pack' },
  //         { extensionCategory: 'Refill Pack', url: 'https://www.coles.com.au/browse/baby/baby-wipes/refill-pack' },
  //         { extensionCategory: 'Small Pack', url: 'https://www.coles.com.au/browse/baby/baby-wipes/small-pack' },
  //         { extensionCategory: 'Travel Pack', url: 'https://www.coles.com.au/browse/baby/baby-wipes/travel-pack' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Baby Feeding',
  //       childItems: [
  //         { extensionCategory: 'Nursing Care', url: 'https://www.coles.com.au/browse/baby/baby-feeding/nursing-care' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Baby & Toddler Food',
  //       childItems: [
  //         { extensionCategory: 'Baby & Toddler Snacks', url: 'https://www.coles.com.au/browse/baby/baby-toddler-food/baby-toddler-snacks' },
  //         { extensionCategory: 'Baby Cereals', url: 'https://www.coles.com.au/browse/baby/baby-toddler-food/baby-cereals' },
  //         { extensionCategory: 'Baby Food Jars', url: 'https://www.coles.com.au/browse/baby/baby-toddler-food/baby-food-jars' },
  //         { extensionCategory: 'Baby Food Pouches', url: 'https://www.coles.com.au/browse/baby/baby-toddler-food/baby-food-pouches' },
  //         { extensionCategory: 'Baby Pasta', url: 'https://www.coles.com.au/browse/baby/baby-toddler-food/baby-pasta' },
  //         { extensionCategory: 'Baby Rusks', url: 'https://www.coles.com.au/browse/baby/baby-toddler-food/baby-rusks' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Baby Meal Time',
  //       childItems: [
  //         { extensionCategory: 'Baby Plates & Bowls', url: 'https://www.coles.com.au/browse/baby/baby-meal-time/baby-plates-bowls' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Bottles & Feeding',
  //       childItems: [
  //         { extensionCategory: 'Baby Bottles', url: 'https://www.coles.com.au/browse/baby/bottles-feeding/baby-bottles' },
  //         { extensionCategory: 'Baby Cups', url: 'https://www.coles.com.au/browse/baby/bottles-feeding/baby-cups' },
  //         { extensionCategory: 'Baby Teats', url: 'https://www.coles.com.au/browse/baby/bottles-feeding/baby-teats' },
  //         { extensionCategory: 'Bottle Accessories', url: 'https://www.coles.com.au/browse/baby/bottles-feeding/bottle-accessories' },
  //         { extensionCategory: 'Bottle Cleaning', url: 'https://www.coles.com.au/browse/baby/bottles-feeding/bottle-cleaning' },
  //         { extensionCategory: 'Bottle Feeding', url: 'https://www.coles.com.au/browse/baby/bottles-feeding/bottle-feeding' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Bath & Skincare',
  //       childItems: [
  //         { extensionCategory: 'Baby Bath', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-bath' },
  //         { extensionCategory: 'Baby Cotton Buds', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-cotton-buds' },
  //         { extensionCategory: 'Baby Hair & Body Wash', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-hair-body-wash' },
  //         { extensionCategory: 'Baby Hair Care', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-hair-care' },
  //         { extensionCategory: 'Baby Medicinal', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-medicinal' },
  //         { extensionCategory: 'Baby Moisturiser', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-moisturiser' },
  //         { extensionCategory: 'Baby Oil', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-oil' },
  //         { extensionCategory: 'Baby Powder', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-powder' },
  //         { extensionCategory: 'Nappy Rash Treatment', url: 'https://www.coles.com.au/browse/baby/bath-skincare/nappy-rash-treatment' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Dummies & Teething',
  //       childItems: [
  //         { extensionCategory: 'Soothers & Teethers', url: 'https://www.coles.com.au/browse/baby/dummies-teething/soothers-teethers' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Postpartum Care',
  //       childItems: [
  //         { extensionCategory: 'Postpartum Care', url: 'https://www.coles.com.au/browse/baby/postpartum-care/postpartum-underwear' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Bakery',
  //   subCategories: [
  //     {
  //       subCategory: 'Chilled Cakes & Desserts',
  //       childItems: [
  //         { extensionCategory: '2 Pack & Individual Serve Desserts', url: 'https://www.coles.com.au/browse/bakery/chilled-cakes-desserts/2-pack-individual-serve-desserts' },
  //         { extensionCategory: 'Birthday & Celebration Cakes', url: 'https://www.coles.com.au/browse/bakery/chilled-cakes-desserts/birthday-celebration-cakes' },
  //         { extensionCategory: 'Cheesecakes', url: 'https://www.coles.com.au/browse/bakery/chilled-cakes-desserts/cheesecakes' },
  //         { extensionCategory: 'Cream Cakes', url: 'https://www.coles.com.au/browse/bakery/chilled-cakes-desserts/cream-cakes' },
  //         { extensionCategory: 'Pavlova & Meringue', url: 'https://www.coles.com.au/browse/bakery/chilled-cakes-desserts/pavlova-meringue' },
  //         { extensionCategory: 'Tarts & Pies', url: 'https://www.coles.com.au/browse/bakery/chilled-cakes-desserts/tarts-pies' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Easter Bakery',
  //       childItems: [
  //         { extensionCategory: 'Hot Cross Buns', url: 'https://www.coles.com.au/browse/bakery/easter-bakery/hot-cross-buns' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Gluten Free Range',
  //       childItems: [
  //         { extensionCategory: 'All Packaged Bread', url: 'https://www.coles.com.au/browse/bakery/gluten-free-range/all-packaged-bread' },
  //         { extensionCategory: 'Gluten Free Hot Cross Buns', url: 'https://www.coles.com.au/browse/bakery/gluten-free-range/gluten-free-hot-cross-buns' },
  //         { extensionCategory: 'Packaged Breakfast Snack', url: 'https://www.coles.com.au/browse/bakery/gluten-free-range/packaged-breakfast-snack' },
  //         { extensionCategory: 'Packaged Buns & Bread Rolls', url: 'https://www.coles.com.au/browse/bakery/gluten-free-range/packaged-buns-bread-rolls' },
  //         { extensionCategory: 'Packaged Cake & Sweet Treats', url: 'https://www.coles.com.au/browse/bakery/gluten-free-range/packaged-cake-sweet-treats' },
  //         { extensionCategory: 'Packaged Wraps, Flat Bread and Pizza Bases', url: 'https://www.coles.com.au/browse/bakery/gluten-free-range/packaged-wraps-flat-bread-and-pizza-bases' },
  //     ],
  //     },
  //     {
  //       subCategory: 'Instore Bakery Breads and Rolls',
  //       childItems: [
  //         { extensionCategory: 'Artisan Style Breads By Laurent', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/artisan-style-breads-by-laurent' },
  //         { extensionCategory: 'Baguettes', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/baguettes' },
  //         { extensionCategory: 'Bread Loaves', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/bread-loaves' },
  //         { extensionCategory: 'Bread Rolls', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/bread-rolls' },
  //         { extensionCategory: 'Healthier Breads', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/healthier-breads' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Instore Bakery Sweet Treats',
  //       childItems: [
  //         { extensionCategory: 'Cookies', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/cookies' },
  //         { extensionCategory: 'Donuts', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/donuts' },
  //         { extensionCategory: 'Easter Treats', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/easter-treats' },
  //         { extensionCategory: 'Pastries & Danishes', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/pastries-danishes' },
  //         { extensionCategory: 'Scones', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/scones' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Packaged Bread Rolls and Buns',
  //       childItems: [
  //         { extensionCategory: 'Brioche', url: 'https://www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns/brioche' },
  //         { extensionCategory: 'Burger Buns and Hot Dog Rolls', url: 'https://www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns/burger-buns-and-hot-dog-rolls' },
  //         { extensionCategory: 'Gluten Free Rolls & Buns', url: 'https://www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns/gluten-free-rolls-buns' },
  //         { extensionCategory: 'Thins', url: 'https://www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns/thins' },
  //     ],
  //     },
  //     {
  //       subCategory: 'Packaged Breads',
  //       childItems: [
  //         { extensionCategory: 'Digestive Health & Speciality Bread', url: 'https://www.coles.com.au/browse/bakery/packaged-breads/digestive-health-speciality-bread' },
  //         { extensionCategory: 'Gluten Free Packaged Bread', url: 'https://www.coles.com.au/browse/bakery/packaged-breads/gluten-free-packaged-bread' },
  //         { extensionCategory: 'Multigrain & Seeded Bread', url: 'https://www.coles.com.au/browse/bakery/packaged-breads/multigrain-seeded-bread' },
  //         { extensionCategory: 'Rye Bread', url: 'https://www.coles.com.au/browse/bakery/packaged-breads/rye-bread' },
  //         { extensionCategory: 'White Bread', url: 'https://www.coles.com.au/browse/bakery/packaged-breads/white-bread' },
  //         { extensionCategory: 'Wholemeal Bread', url: 'https://www.coles.com.au/browse/bakery/packaged-breads/wholemeal-bread' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Packaged Breakfast Snacks',
  //       childItems: [
  //         { extensionCategory: 'Bagels', url: 'https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks/bagels' },
  //         { extensionCategory: 'Croissants & Pastries', url: 'https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks/croissants-pastries' },
  //         { extensionCategory: 'Crumpet', url: 'https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks/crumpet' },
  //         { extensionCategory: 'English Muffins', url: 'https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks/english-muffins' },
  //         { extensionCategory: 'Fruit Bread', url: 'https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks/fruit-bread' },
  //         { extensionCategory: 'Gluten Free Packaged Snacks', url: 'https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks/gluten-free-packaged-snacks' },
  //         { extensionCategory: 'Pikelets, Pancakes and Crepes', url: 'https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks/pikelets-pancakes-and-crepes' },
  //         { extensionCategory: 'Waffles', url: 'https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks/waffles' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Packaged Cakes & Sweet Treats',
  //       childItems: [
  //         { extensionCategory: 'Cookies & Biscuits', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/cookies-biscuits' },
  //         { extensionCategory: 'Cupcakes', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/cupcakes' },
  //         { extensionCategory: 'Fruit Cakes', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/fruit-cakes' },
  //         { extensionCategory: 'Gluten Free Cakes & Treats', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/gluten-free-cakes-treats' },
  //         { extensionCategory: 'Lamingtons', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/lamingtons' },
  //         { extensionCategory: 'Loaf Cakes', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/loaf-cakes' },
  //         { extensionCategory: 'Meringues & Pavlovas', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/meringues-pavlovas' },
  //         { extensionCategory: 'Muffins & Muffin Bars', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/muffins-muffin-bars' },
  //         { extensionCategory: 'Pastry Shells', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/pastry-shells' },
  //         { extensionCategory: 'Slices & Bites', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/slices-bites' },
  //         { extensionCategory: 'Sponge & Mud Cakes', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/sponge-mud-cakes' },
  //         { extensionCategory: 'Sponge Rolls & Cake Bars', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/sponge-rolls-cake-bars' },
  //         { extensionCategory: 'Sweet Brioche', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/sweet-brioche' },
  //         { extensionCategory: 'Tea Cakes', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/tea-cakes' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Packaged Flat Bread, Wraps and Pizza Bases',
  //       childItems: [
  //         { extensionCategory: 'Flavoured Wraps', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/flavoured-wraps' },
  //         { extensionCategory: 'Gluten Free Wraps & Flat Bread', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/gluten-free-wraps-flat-bread' },
  //         { extensionCategory: 'Naan Bread and Gyros', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/naan-bread-and-gyros' },
  //         { extensionCategory: 'Other Flat Breads', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/other-flat-breads' },
  //         { extensionCategory: 'Pizza Bases', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/pizza-bases' },
  //         { extensionCategory: 'Turkish and Ciabatta', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/turkish-and-ciabatta' },
  //         { extensionCategory: 'White Wraps', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/white-wraps' },
  //         { extensionCategory: 'Wholegrain & Seeded Wraps', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/wholegrain-seeded-wraps' },
  //         { extensionCategory: 'Wholemeal Wraps', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/wholemeal-wraps' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Vegan Range',
  //       childItems: [
  //         { extensionCategory: 'All Vegan Range', url: 'https://www.coles.com.au/browse/bakery/vegan-range/all-vegan-range' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Dairy, Eggs & Fridge',
  //   subCategories: [
  //     {
  //       subCategory: 'Butter & Margarine',
  //       childItems: [
  //         { extensionCategory: 'Blends', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/butter-margarine/blends' },
  //         { extensionCategory: 'Butter', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/butter-margarine/butter' },
  //         { extensionCategory: 'Margarine', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/butter-margarine/margarine' },
         
  //         ],
  //     },
  //     {
  //       subCategory: 'Cheese',
  //       childItems: [
  //         { extensionCategory: 'Block Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/block-cheese' },
  //         { extensionCategory: 'Blue Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/blue-cheese' },
  //         { extensionCategory: 'Brie & Soft Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/brie-soft-cheese' },
  //         { extensionCategory: 'Cheddar & Tasty Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/cheddar-tasty-cheese' },
  //         { extensionCategory: 'Cheese Snacks', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/cheese-snacks' },
  //         { extensionCategory: 'Cream Cheese & Spreads', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/cream-cheese-spreads' },
  //         { extensionCategory: 'Feta Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/feta-cheese' },
  //         { extensionCategory: 'Firm Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/firm-cheese' },
  //         { extensionCategory: 'Gourmet Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/gourmet-cheese' },
  //         { extensionCategory: 'Grated Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/grated-cheese' },
  //         { extensionCategory: 'Pates & Platters', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/pates-platters' },
  //         { extensionCategory: 'Sliced Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/sliced-cheese' },
  //         { extensionCategory: 'Specialty & Entertaining Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese/specialty-entertaining-cheese' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Cream & Custard',
  //       childItems: [
  //         { extensionCategory: 'Cream', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cream-custard/cream' },
  //         { extensionCategory: 'Custards', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cream-custard/custards' },
  //         { extensionCategory: 'Sour Cream', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cream-custard/sour-cream' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Dairy Desserts',
  //       childItems: [
  //         { extensionCategory: 'Chilled Dairy Desserts', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/dairy-desserts/chilled-dairy-desserts' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Dairy World Foods',
  //       childItems: [
  //         { extensionCategory: 'Asian Foods', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/dairy-world-foods/asian-foods' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Dips & Pate',
  //       childItems: [
  //         { extensionCategory: 'Dips', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/dips-pate/dips' },
  //         { extensionCategory: 'Paste', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/dips-pate/paste' },
  //         { extensionCategory: 'Pate', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/dips-pate/pate' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Eggs',
  //       childItems: [
  //         { extensionCategory: 'Barn Eggs', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/eggs/barn-eggs' },
  //         { extensionCategory: 'Cage Eggs', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/eggs/cage-eggs' },
  //         { extensionCategory: 'Egg Whites', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/eggs/egg-whites' },
  //         { extensionCategory: 'Free Range Eggs', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/eggs/free-range-eggs' },
  //         { extensionCategory: 'Specialty Eggs', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/eggs/specialty-eggs' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Fresh Pasta & Sauces',
  //       childItems: [
  //         { extensionCategory: 'Fresh Pasta & Noodles', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/fresh-pasta-sauces/fresh-pasta-noodles' },
  //         { extensionCategory: 'Pasta Sauces', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/fresh-pasta-sauces/pasta-sauces' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Garlic Bread & Pastry Sheets',
  //       childItems: [
  //         { extensionCategory: 'Chilled Garlic & Specialty Breads', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/garlic-bread-pastry-sheets/chilled-garlic-specialty-breads' },
  //         { extensionCategory: 'Chilled Pastry & Dough', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/garlic-bread-pastry-sheets/chilled-pastry-dough' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Long Life Milk',
  //       childItems: [
  //         { extensionCategory: 'Almond & Other Nut Milk', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/long-life-milk/almond-other-nut-milk' },
  //           ],
  //     },
  //     {
  //       subCategory: 'Milk',
  //       childItems: [
  //         { extensionCategory: 'Flavoured Milk', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/milk/flavoured-milk' },
  //         { extensionCategory: 'Full Cream Milk', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/milk/full-cream-milk' },
  //         { extensionCategory: 'Probiotic Milk', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/milk/probiotic-milk' },
  //         { extensionCategory: 'Skim & Low Fat Milk', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/milk/skim-low-fat-milk' },
  //         { extensionCategory: 'Soy & Almond Milk', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/milk/soy-almond-milk' },
  //         { extensionCategory: 'Specialty Milk', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/milk/specialty-milk' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Packaged Deli Meats',
  //       childItems: [
  //         { extensionCategory: 'Packaged Bacon', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats/packaged-bacon' },
  //         { extensionCategory: 'Packaged Deli Meat', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats/packaged-deli-meat' },
  //         { extensionCategory: 'Packaged Frankfurts', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats/packaged-frankfurts' },
  //         { extensionCategory: 'Packaged Salami & Kabana', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats/packaged-salami-kabana' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Ready to Eat Meals',
  //       childItems: [
  //         { extensionCategory: 'Bbq', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/bbq' },
  //         { extensionCategory: 'Grab & Go Snacks', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/grab-go-snacks' },
  //         { extensionCategory: 'Hot Snacks & Sides', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/hot-snacks-sides' },
  //         { extensionCategory: 'Indian Food & Meals', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/indian-food-meals' },
  //         { extensionCategory: 'Italian Meals & Pasta', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/italian-meals-pasta' },
  //         { extensionCategory: 'Other Ready Meals', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/other-ready-meals' },
  //         { extensionCategory: 'Pies & Pastries', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/pies-pastries' },
  //         { extensionCategory: 'Pizzas', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/pizzas' },
  //         { extensionCategory: 'Soups & Stews', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/soups-stews' },
  //         { extensionCategory: 'Thai Meals', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/thai-meals' },
  //         { extensionCategory: 'the Kitchen Meals', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/the-kitchen-meals' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Vegetarian & Vegan',
  //       childItems: [
  //         { extensionCategory: 'Falafels', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/falafels' },
  //         { extensionCategory: 'Soy', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/soy' },
  //         { extensionCategory: 'Tofu', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/tofu' },
  //         { extensionCategory: 'Vegan Cheese', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/vegan-cheese' },
  //         { extensionCategory: 'Vegetarian Snacking', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/vegetarian-snacking' },
  //         { extensionCategory: 'Veggie Burgers & Sausages', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/veggie-burgers-sausages' },
  //         { extensionCategory: 'Veggie Meat & Chicken', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/veggie-meat-chicken' },
  //         ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Deli',
  //   subCategories: [
  //     {
  //       subCategory: 'Deli Meats',
  //       childItems: [
  //         { extensionCategory: 'Beef & Lamb', url: 'https://www.coles.com.au/browse/deli/deli-meats/beef-lamb' },
  //         { extensionCategory: 'Chicken & Turkey', url: 'https://www.coles.com.au/browse/deli/deli-meats/chicken-turkey' },
  //         { extensionCategory: 'Deli Bacon', url: 'https://www.coles.com.au/browse/deli/deli-meats/deli-bacon' },
  //         { extensionCategory: 'Ham', url: 'https://www.coles.com.au/browse/deli/deli-meats/ham' },
  //         { extensionCategory: 'Kabana, Pancetta & Mortdella', url: 'https://www.coles.com.au/browse/deli/deli-meats/kabana-pancetta-mortdella' },
  //         { extensionCategory: 'Other Sliced Meats', url: 'https://www.coles.com.au/browse/deli/deli-meats/other-sliced-meats' },
  //         { extensionCategory: 'Salami', url: 'https://www.coles.com.au/browse/deli/deli-meats/salami' },
  //         { extensionCategory: 'Sausages, Frankfurts & Kransky', url: 'https://www.coles.com.au/browse/deli/deli-meats/sausages-frankfurts-kransky' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Deli Packaged Meat',
  //       childItems: [
  //         { extensionCategory: 'Frankfurts & Kransky Packaged', url: 'https://www.coles.com.au/browse/deli/deli-packaged-meat/frankfurts-kransky-packaged' },
  //         { extensionCategory: 'Meat Packaged', url: 'https://www.coles.com.au/browse/deli/deli-packaged-meat/meat-packaged' },
  //         { extensionCategory: 'Packaged Bacon', url: 'https://www.coles.com.au/browse/deli/deli-packaged-meat/packaged-bacon' },
  //         { extensionCategory: 'Packaged Ham', url: 'https://www.coles.com.au/browse/deli/deli-packaged-meat/packaged-ham' },
  //         { extensionCategory: 'Salami & Kabana Packaged', url: 'https://www.coles.com.au/browse/deli/deli-packaged-meat/salami-kabana-packaged' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Deli Poultry',
  //       childItems: [
  //         { extensionCategory: 'Breast & Thigh Fillets', url: 'https://www.coles.com.au/browse/deli/deli-poultry/breast-thigh-fillets' },
  //         { extensionCategory: 'Diced & Tenders', url: 'https://www.coles.com.au/browse/deli/deli-poultry/diced-tenders' },
  //         { extensionCategory: 'Kebabs, Nibbles & Crumbed', url: 'https://www.coles.com.au/browse/deli/deli-poultry/kebabs-nibbles-crumbed' },
  //         { extensionCategory: 'Wings & Drumsticks', url: 'https://www.coles.com.au/browse/deli/deli-poultry/wings-drumsticks' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Deli Seafood',
  //       childItems: [
  //         { extensionCategory: 'Fish', url: 'https://www.coles.com.au/browse/deli/deli-seafood/fish' },
  //         { extensionCategory: 'Marinara Mix', url: 'https://www.coles.com.au/browse/deli/deli-seafood/marinara-mix' },
  //         { extensionCategory: 'Prawn & Crustaceans', url: 'https://www.coles.com.au/browse/deli/deli-seafood/prawn-crustaceans' },
  //         { extensionCategory: 'Prepackaged Seafood', url: 'https://www.coles.com.au/browse/deli/deli-seafood/prepackaged-seafood' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Entertaining',
  //       childItems: [
  //         { extensionCategory: 'Antipasto', url: 'https://www.coles.com.au/browse/deli/entertaining/antipasto' },
  //         { extensionCategory: 'Crackers, Dips & Pate', url: 'https://www.coles.com.au/browse/deli/entertaining/crackers-dips-pate' },
  //         { extensionCategory: 'Olives', url: 'https://www.coles.com.au/browse/deli/entertaining/olives' },
  //         { extensionCategory: 'Prepacked Olives & Antipasto', url: 'https://www.coles.com.au/browse/deli/entertaining/prepacked-olives-antipasto' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Gourmet Cheese',
  //       childItems: [
  //         { extensionCategory: 'Brie & Camembert', url: 'https://www.coles.com.au/browse/deli/gourmet-cheese/brie-camembert' },
  //         { extensionCategory: 'Cheddar', url: 'https://www.coles.com.au/browse/deli/gourmet-cheese/cheddar' },
  //         { extensionCategory: 'Deli Blue Cheese', url: 'https://www.coles.com.au/browse/deli/gourmet-cheese/deli-blue-cheese' },
  //         { extensionCategory: 'Fetta, Haloumi & Other', url: 'https://www.coles.com.au/browse/deli/gourmet-cheese/fetta-haloumi-other' },
  //         { extensionCategory: 'Fruit & Flavoured Cheese', url: 'https://www.coles.com.au/browse/deli/gourmet-cheese/fruit-flavoured-cheese' },
  //         { extensionCategory: 'Goats Cheese', url: 'https://www.coles.com.au/browse/deli/gourmet-cheese/goats-cheese' },
  //         { extensionCategory: 'Hard Cheese', url: 'https://www.coles.com.au/browse/deli/gourmet-cheese/hard-cheese' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Pre-Made Platters',
  //       childItems: [
  //         { extensionCategory: 'Deli Platter', url: 'https://www.coles.com.au/browse/deli/pre-made-platters/deli-platter' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Ready to Eat',
  //       childItems: [
  //         { extensionCategory: 'Chilled Quiches & Pies', url: 'https://www.coles.com.au/browse/deli/ready-to-eat/chilled-quiches-pies' },
  //         { extensionCategory: 'Heat & Eat', url: 'https://www.coles.com.au/browse/deli/ready-to-eat/heat-eat' },
  //         { extensionCategory: 'Hot Food', url: 'https://www.coles.com.au/browse/deli/ready-to-eat/hot-food' },
  //         ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Drinks',
  //   subCategories: [
  //     {
  //       subCategory: 'Coffee Drinks',
  //       childItems: [
  //         { extensionCategory: 'Accessories Coffee', url: 'https://www.coles.com.au/browse/drinks/coffee-drinks/accessories-coffee' },
  //         { extensionCategory: 'Beans Coffee', url: 'https://www.coles.com.au/browse/drinks/coffee-drinks/beans-coffee' },
  //         { extensionCategory: 'Coffee Capsules', url: 'https://www.coles.com.au/browse/drinks/coffee-drinks/coffee-capsules' },
  //         { extensionCategory: 'Coffee Ground', url: 'https://www.coles.com.au/browse/drinks/coffee-drinks/coffee-ground' },
  //         { extensionCategory: 'Coffee Instant', url: 'https://www.coles.com.au/browse/drinks/coffee-drinks/coffee-instant' },
  //         { extensionCategory: 'Mixes Coffee', url: 'https://www.coles.com.au/browse/drinks/coffee-drinks/mixes-coffee' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Cold Drinks',
  //       childItems: [
  //         { extensionCategory: 'Cold Soft Drinks', url: 'https://www.coles.com.au/browse/drinks/cold-drinks/cold-soft-drinks' },
  //         { extensionCategory: 'Cold Water', url: 'https://www.coles.com.au/browse/drinks/cold-drinks/cold-water' },
  //         { extensionCategory: 'Other Cold Drinks', url: 'https://www.coles.com.au/browse/drinks/cold-drinks/other-cold-drinks' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Cordials',
  //       childItems: [
  //         { extensionCategory: 'All Cordials', url: 'https://www.coles.com.au/browse/drinks/cordials/all-cordials' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Energy Drinks',
  //       childItems: [
  //         { extensionCategory: 'Multipack Cans', url: 'https://www.coles.com.au/browse/drinks/energy-drinks/multipack-cans' },
  //         { extensionCategory: 'Single Cans', url: 'https://www.coles.com.au/browse/drinks/energy-drinks/single-cans' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Flavoured Milk',
  //       childItems: [
  //         { extensionCategory: 'Drinking Chocolate', url: 'https://www.coles.com.au/browse/drinks/flavoured-milk/drinking-chocolate' },
  //         { extensionCategory: 'Drinks & Powders', url: 'https://www.coles.com.au/browse/drinks/flavoured-milk/drinks-powders' },
  //         { extensionCategory: 'Kids Milk', url: 'https://www.coles.com.au/browse/drinks/flavoured-milk/kids-milk' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Iced Tea',
  //       childItems: [
  //         { extensionCategory: 'Single & Multi Serve', url: 'https://www.coles.com.au/browse/drinks/iced-tea/single-multi-serve' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Juice',
  //       childItems: [
  //         { extensionCategory: 'Canned Juices', url: 'https://www.coles.com.au/browse/drinks/juice/canned-juices' },
  //         { extensionCategory: 'Chilled Juice', url: 'https://www.coles.com.au/browse/drinks/juice/chilled-juice' },
  //         { extensionCategory: 'Glass Juice Bottles', url: 'http://coles.com.au/browse/drinks/juice/glass-juice-bottles' },
  //         { extensionCategory: 'Multi Pack Juice', url: 'https://www.coles.com.au/browse/drinks/juice/multi-pack-juice' },
  //         { extensionCategory: 'Packs & Pouches', url: 'https://www.coles.com.au/browse/drinks/juice/packs-pouches' },
  //         { extensionCategory: 'Plastic Juice Bottles', url: 'https://www.coles.com.au/browse/drinks/juice/plastic-juice-bottles' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Long-Life Milk',
  //       childItems: [
  //         { extensionCategory: 'Almond & Other Nut Milk', url: 'https://www.coles.com.au/browse/drinks/long-life-milk/almond-other-nut-milk' },
  //         { extensionCategory: 'Lactose Free Milk', url: 'https://www.coles.com.au/browse/drinks/long-life-milk/lactose-free-milk' },
  //         { extensionCategory: 'Long Life Flavoured Milk', url: 'https://www.coles.com.au/browse/drinks/long-life-milk/long-life-flavoured-milk' },
  //         { extensionCategory: 'Long Life Milk', url: 'https://www.coles.com.au/browse/drinks/long-life-milk/long-life-milk' },
  //         { extensionCategory: 'Oat Milk', url: 'https://www.coles.com.au/browse/drinks/long-life-milk/oat-milk' },
  //         { extensionCategory: 'Powdered Milk', url: 'https://www.coles.com.au/browse/drinks/long-life-milk/powdered-milk' },
  //         { extensionCategory: 'Soy Milk', url: 'https://www.coles.com.au/browse/drinks/long-life-milk/soy-milk' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Non-Alcoholic',
  //       childItems: [
  //         { extensionCategory: 'Non-Alcoholic Drinks', url: 'https://www.coles.com.au/browse/drinks/non-alcoholic/non-alcoholic-drinks' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Soft Drinks',
  //       childItems: [
  //         { extensionCategory: 'Kombucha & Other Drinks', url: 'https://www.coles.com.au/browse/drinks/soft-drinks/kombucha-other-drinks' },
  //         { extensionCategory: 'Mixers', url: 'https://www.coles.com.au/browse/drinks/soft-drinks/mixers' },
  //         { extensionCategory: 'Soft Drink Bottles', url: 'https://www.coles.com.au/browse/drinks/soft-drinks/soft-drink-bottles' },
  //         { extensionCategory: 'Soft Drink Cans', url: 'https://www.coles.com.au/browse/drinks/soft-drinks/soft-drink-cans' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Sports Drinks',
  //       childItems: [
  //         { extensionCategory: 'All Iced Tea', url: 'https://www.coles.com.au/browse/drinks/sports-drinks/all-iced-tea' },
  //         { extensionCategory: 'Sport Drink Powders', url: 'https://www.coles.com.au/browse/drinks/sports-drinks/sport-drink-powders' },
  //         { extensionCategory: 'Sports Drink', url: 'https://www.coles.com.au/browse/drinks/sports-drinks/sports-drink' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Tea Drinks',
  //       childItems: [
  //         { extensionCategory: 'Tea Black', url: 'https://www.coles.com.au/browse/drinks/tea-drinks/tea-black' },
  //         { extensionCategory: 'Tea Bubble', url: 'https://www.coles.com.au/browse/drinks/tea-drinks/tea-bubble' },
  //         { extensionCategory: 'Tea Chai', url: 'https://www.coles.com.au/browse/drinks/tea-drinks/tea-chai' },
  //         { extensionCategory: 'Tea Green', url: 'https://www.coles.com.au/browse/drinks/tea-drinks/tea-green' },
  //         { extensionCategory: 'Tea Herbal', url: 'https://www.coles.com.au/browse/drinks/tea-drinks/tea-herbal' },
  //         { extensionCategory: 'Tea Loose Leaf', url: 'https://www.coles.com.au/browse/drinks/tea-drinks/tea-loose-leaf' },
  //         { extensionCategory: 'Tea Organic', url: 'https://www.coles.com.au/browse/drinks/tea-drinks/tea-organic' },
  //          ],
  //     },
  //     {
  //       subCategory: 'Water',
  //       childItems: [
  //         { extensionCategory: 'Flavoured Water', url: 'https://www.coles.com.au/browse/drinks/water/flavoured-water' },
  //         { extensionCategory: 'Mineral Water', url: 'https://www.coles.com.au/browse/drinks/water/mineral-water' },
  //         { extensionCategory: 'Sparkling Water', url: 'https://www.coles.com.au/browse/drinks/water/sparkling-water' },
  //         { extensionCategory: 'Still Water', url: 'https://www.coles.com.au/browse/drinks/water/still-water' },
  //          ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Frozen',
  //   subCategories: [
  //     // {
  //     //   subCategory: 'Ice Cream',
  //     //   childItems: [
  //     //     { extensionCategory: 'Frozen Yoghurt', url: 'https://www.coles.com.au/browse/frozen/ice-cream/frozen-yoghurt' },
  //     //     { extensionCategory: 'Ice Cream Desserts', url: 'https://www.coles.com.au/browse/frozen/ice-cream/ice-cream-desserts' },
  //     //     { extensionCategory: 'Ice Cream Sticks', url: 'https://www.coles.com.au/browse/frozen/ice-cream/ice-cream-sticks' },
  //     //     { extensionCategory: 'Ice Cream Tubs', url: 'https://www.coles.com.au/browse/frozen/ice-cream/ice-cream-tubs' },
  //     //     { extensionCategory: 'Premium Ice Cream', url: 'https://www.coles.com.au/browse/frozen/ice-cream/premium-ice-cream' },
  //     //     { extensionCategory: 'Sorbet & Gelato', url: 'https://www.coles.com.au/browse/frozen/ice-cream/sorbet-gelato' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Frozen Baby & Toddler Meals',
  //     //   childItems: [
  //     //     { extensionCategory: 'All Baby & Toddler Meals', url: 'https://www.coles.com.au/browse/frozen/frozen-baby-toddler-meals/all-baby-toddler-meals' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Frozen Chicken, Beef & Pork',
  //     //   childItems: [
  //     //     { extensionCategory: 'Beef & Pork', url: 'https://www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/beef-pork' },
  //     //     { extensionCategory: 'Burgers', url: 'https://www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/burgers' },
  //     //     { extensionCategory: 'Chicken Pieces & Nuggets', url: 'https://www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/chicken-pieces-nuggets' },
  //     //     { extensionCategory: 'Chicken Wing & Nibbles', url: 'https://www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/chicken-wing-nibbles' },
  //     //     { extensionCategory: 'Frozen Turkey', url: 'https://www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/frozen-turkey' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Frozen Chips & Wedges',
  //     //   childItems: [
  //     //     { extensionCategory: 'Chips', url: 'https://www.coles.com.au/browse/frozen/frozen-chips-wedges/chips' },
  //     //     { extensionCategory: 'Hashbrowns', url: 'https://www.coles.com.au/browse/frozen/frozen-chips-wedges/hashbrowns' },
  //     //     { extensionCategory: 'Oven Roasted', url: 'https://www.coles.com.au/browse/frozen/frozen-chips-wedges/oven-roasted' },
  //     //     { extensionCategory: 'Wedges', url: 'https://www.coles.com.au/browse/frozen/frozen-chips-wedges/wedges' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Frozen Desserts',
  //     //   childItems: [
  //     //     { extensionCategory: 'Assorted Desserts', url: 'https://www.coles.com.au/browse/frozen/frozen-desserts/assorted-desserts' },
  //     //     { extensionCategory: 'Cakes & Cheesecakes', url: 'https://www.coles.com.au/browse/frozen/frozen-desserts/cakes-cheesecakes' },
  //     //     { extensionCategory: 'Dessert Pies', url: 'https://www.coles.com.au/browse/frozen/frozen-desserts/dessert-pies' },
  //     //     { extensionCategory: 'Ice Cream Cakes', url: 'https://www.coles.com.au/browse/frozen/frozen-desserts/ice-cream-cakes' },
  //     //     { extensionCategory: 'Pastries & Puddings', url: 'https://www.coles.com.au/browse/frozen/frozen-desserts/pastries-puddings' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Frozen Fish & Seafood',
  //     //   childItems: [
  //     //     { extensionCategory: 'Fish Fillets', url: 'https://www.coles.com.au/browse/frozen/frozen-fish-seafood/fish-fillets' },
  //     //     { extensionCategory: 'Fish Fingers & Cakes', url: 'https://www.coles.com.au/browse/frozen/frozen-fish-seafood/fish-fingers-cakes' },
  //     //     { extensionCategory: 'Seafood Frozen', url: 'https://www.coles.com.au/browse/frozen/frozen-fish-seafood/seafood-frozen' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Frozen Fruit',
  //     //   childItems: [
  //     //     { extensionCategory: 'Berries', url: 'https://www.coles.com.au/browse/frozen/frozen-fruit/berries' },
  //     //     { extensionCategory: 'Tropical', url: 'https://www.coles.com.au/browse/frozen/frozen-fruit/tropical' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Frozen Gluten Free',
  //     //   childItems: [
  //     //     { extensionCategory: 'All Gluten Free', url: 'https://www.coles.com.au/browse/frozen/frozen-gluten-free/all-gluten-free' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Frozen Meals',
  //     //   childItems: [
  //     //     { extensionCategory: 'Convenience Meals', url: 'https://www.coles.com.au/browse/frozen/frozen-meals/convenience-meals' },
  //     //     ],
  //     // },
  //     {
  //       subCategory: 'Frozen Pastry & Party Food',
  //       childItems: [
  //         { extensionCategory: 'Asian Party Food', url: 'https://www.coles.com.au/browse/frozen/frozen-pastry-party-food/asian-party-food' },
  //         { extensionCategory: 'Party Food', url: 'https://www.coles.com.au/browse/frozen/frozen-pastry-party-food/party-food' },
  //         { extensionCategory: 'Pastries', url: 'https://www.coles.com.au/browse/frozen/frozen-pastry-party-food/pastries' },
  //         { extensionCategory: 'Pastry Sheets', url: 'https://www.coles.com.au/browse/frozen/frozen-pastry-party-food/pastry-sheets' },
  //         { extensionCategory: 'Pies & Quiches', url: 'https://www.coles.com.au/browse/frozen/frozen-pastry-party-food/pies-quiches' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Frozen Pizza & Bases',
  //       childItems: [
  //         { extensionCategory: 'Pizza Snacks', url: 'https://www.coles.com.au/browse/frozen/frozen-pizza-bases/pizza-snacks' },
  //         { extensionCategory: 'Pizzas', url: 'https://www.coles.com.au/browse/frozen/frozen-pizza-bases/pizzas' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Frozen Vegan & Vegetarian',
  //       childItems: [
  //         { extensionCategory: 'All Plant Based', url: 'https://www.coles.com.au/browse/frozen/frozen-vegan-vegetarian/all-plant-based' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Frozen Vegetables',
  //       childItems: [
  //         { extensionCategory: 'Beans', url: 'https://www.coles.com.au/browse/frozen/frozen-vegetables/beans' },
  //         { extensionCategory: 'Corn', url: 'https://www.coles.com.au/browse/frozen/frozen-vegetables/corn' },
  //         { extensionCategory: 'Mixed Vegetables', url: 'https://www.coles.com.au/browse/frozen/frozen-vegetables/mixed-vegetables' },
  //         { extensionCategory: 'Other Vegetables', url: 'https://www.coles.com.au/browse/frozen/frozen-vegetables/other-vegetables' },
  //         { extensionCategory: 'Oven Roast Potato', url: 'https://www.coles.com.au/browse/frozen/frozen-vegetables/oven-roast-potato' },
  //         { extensionCategory: 'Peas', url: 'https://www.coles.com.au/browse/frozen/frozen-vegetables/peas' },
  //         { extensionCategory: 'Steaming', url: 'https://www.coles.com.au/browse/frozen/frozen-vegetables/steaming' },
  //         { extensionCategory: 'Stir Fry', url: 'https://www.coles.com.au/browse/frozen/frozen-vegetables/stir-fry' },
  //         ],
  //     },
  //     {
  //       subCategory: 'Frozen World Food',
  //       childItems: [
  //         { extensionCategory: 'Frozen Asian Foods', url: 'https://www.coles.com.au/browse/frozen/frozen-world-food/frozen-asian-foods' },
  //         { extensionCategory: 'Frozen Indian Foods', url: 'https://www.coles.com.au/browse/frozen/frozen-world-food/frozen-indian-foods' },
  //         ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Fruit & Vegetables',
  //   subCategories: [
  //     {
  //       subCategory: 'Fruit',
  //       childItems: [
  //         { extensionCategory: 'Apples', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/apples' },
  //         { extensionCategory: 'Avocados', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/avocados' },
  //         { extensionCategory: 'Bananas', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/bananas' },
  //         { extensionCategory: 'Berries & Cherries', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/berries-cherries' },
  //         { extensionCategory: 'Coconuts', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/coconuts' },
  //         { extensionCategory: 'Cut Fruit', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/cut-fruit' },
  //         { extensionCategory: 'Grapefruit', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/grapefruit' },
  //         { extensionCategory: 'Grapes', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/grapes' },
  //         { extensionCategory: 'Kiwi Fruit', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/kiwi-fruit' },
  //         { extensionCategory: 'Lemons & Limes', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/lemons-limes' },
  //         { extensionCategory: 'Mandarins', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/mandarins' },
  //         { extensionCategory: 'Mangoes', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/mangoes' },
  //         { extensionCategory: 'Melons', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/melons' },
  //         { extensionCategory: 'Oranges', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/oranges' },
  //         { extensionCategory: 'Organic Fruit', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/organic-fruit' },
  //         { extensionCategory: 'Passionfruit', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/passionfruit' },
  //         { extensionCategory: 'Peaches & Nectarines', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/peaches-nectarines' },
  //         { extensionCategory: 'Pears', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/pears' },
  //         { extensionCategory: 'Pineapples', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/pineapples' },
  //         { extensionCategory: 'Plums & Apricots', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/plums-apricots' },
  //         { extensionCategory: 'Tropical & Exotic Fruit', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit/tropical-exotic-fruit' },
  //        ],
  //     },
  //     {
  //       subCategory: 'Vegetables',
  //       childItems: [
  //         { extensionCategory: 'Asparagus, Fennel & Artichokes', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/asparagus-fennel-artichokes' },
  //         { extensionCategory: 'Beetroot', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/beetroot' },
  //         { extensionCategory: 'Bok Choy & Asian Greens', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/bok-choy-asian-greens' },
  //         { extensionCategory: 'Broccoli & Cauliflower', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/broccoli-cauliflower' },
  //         { extensionCategory: 'Cabbage, Kale & Brussel Sprouts', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/cabbage-kale-brussel-sprouts' },
  //         { extensionCategory: 'Capsicum & Chillies', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/capsicum-chillies' },
  //         { extensionCategory: 'Carrots & Parsnips', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/carrots-parsnips' },
  //         { extensionCategory: 'Celery', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/celery' },
  //         { extensionCategory: 'Corn', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/corn' },
  //         { extensionCategory: 'Cucumber', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/cucumber' },
  //         { extensionCategory: 'Eggplant', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/eggplant' },
  //         { extensionCategory: 'Garlic & Ginger', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/garlic-ginger' },
  //         { extensionCategory: 'Lettuce', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/lettuce' },
  //         { extensionCategory: 'Mashed & Cut Vegetables', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/mashed-cut-vegetables' },
  //         { extensionCategory: 'Mushrooms', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/mushrooms' },
  //         { extensionCategory: 'Onion & Leeks', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/onion-leeks' },
  //         { extensionCategory: 'Organic Vegetables', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/organic-vegetables' },
  //         { extensionCategory: 'Peas, Beans & Okra', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/peas-beans-okra' },
  //         { extensionCategory: 'Potatoes', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/potatoes' },
  //         { extensionCategory: 'Pumpkin', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/pumpkin' },
  //         { extensionCategory: 'Spinach & Silverbeet', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/spinach-silverbeet' },
  //         { extensionCategory: 'Tomatoes', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/tomatoes' },
  //         { extensionCategory: 'Turnips & Root Vegetables', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/turnips-root-vegetables' },
  //         { extensionCategory: 'Zucchini & Squash', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables/zucchini-squash' },
  //        ],
  //     },
  //     {
  //       subCategory: 'Nuts & Dried Fruit',
  //       childItems: [
  //         { extensionCategory: 'Almonds', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/almonds' },
  //         { extensionCategory: 'Cashews', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/cashews' },
  //         { extensionCategory: 'Dates', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/dates' },
  //         { extensionCategory: 'Dried Fruit', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/dried-fruit' },
  //         { extensionCategory: 'Mixed Fruit & Nuts', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/mixed-fruit-nuts' },
  //         { extensionCategory: 'Other Nuts', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/other-nuts' },
  //         { extensionCategory: 'Peanuts', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/peanuts' },
  //         { extensionCategory: 'Pistachio', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/pistachio' },
  //         { extensionCategory: 'Pretzels & Party Mixes', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/pretzels-party-mixes' },
  //        ],
  //     },
  //     {
  //       subCategory: 'Organic Fruits & Vegetables',
  //       childItems: [
  //         { extensionCategory: 'Organic Fruits', url: 'https://www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables/organic-fruits' },
  //         { extensionCategory: 'Organic Vegetables', url: 'https://www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables/organic-vegetables' },
  //        ],
  //     },
  //     {
  //       subCategory: 'Packaged Salad',
  //       childItems: [
  //         { extensionCategory: 'Lettuce & Mixed Leaf', url: 'https://www.coles.com.au/browse/fruit-vegetables/packaged-salad/lettuce-mixed-leaf' },
  //         { extensionCategory: 'Salad Bowls', url: 'https://www.coles.com.au/browse/fruit-vegetables/packaged-salad/salad-bowls' },
  //         { extensionCategory: 'Salads Dressed', url: 'https://www.coles.com.au/browse/fruit-vegetables/packaged-salad/salads-dressed' },
  //         { extensionCategory: 'Sauces & Salad Dressing', url: 'https://www.coles.com.au/browse/fruit-vegetables/packaged-salad/sauces-salad-dressing' },
  //         { extensionCategory: 'Slaws & Salad Kits', url: 'https://www.coles.com.au/browse/fruit-vegetables/packaged-salad/slaws-salad-kits' },
  //        ],
  //     },
  //     {
  //       subCategory: 'Prepared Vegetable',
  //       childItems: [
  //         { extensionCategory: 'Airfryer', url: 'https://www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/airfryer' },
  //         { extensionCategory: 'Carb Clever Veggies', url: 'https://www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/carb-clever-veggies' },
  //         { extensionCategory: 'Ready to Steam & Roast', url: 'https://www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/ready-to-steam-roast' },
  //         { extensionCategory: 'Stir-Fry Veggie & Sauce', url: 'https://www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/stir-fry-veggie-sauce' },
  //         { extensionCategory: 'Trimmed & Cut Veggies', url: 'https://www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/trimmed-cut-veggies' },
  //        ],
  //     },
  //     {
  //       subCategory: 'Salad & Herbs',
  //       childItems: [
  //         { extensionCategory: 'Herbs', url: 'https://www.coles.com.au/browse/fruit-vegetables/salad-herbs/herbs' },
  //         { extensionCategory: 'Sprouts', url: 'https://www.coles.com.au/browse/fruit-vegetables/salad-herbs/sprouts' },
  //        ],
  //     },
  //     {
  //       subCategory: 'Scoop & Weigh',
  //       childItems: [
  //         { extensionCategory: 'Almond', url: 'https://www.coles.com.au/browse/fruit-vegetables/scoop-weigh/almond' },
  //         { extensionCategory: 'Cashew', url: 'https://www.coles.com.au/browse/fruit-vegetables/scoop-weigh/cashew' },
  //         { extensionCategory: 'Dry Fruits', url: 'https://www.coles.com.au/browse/fruit-vegetables/scoop-weigh/dry-fruits' },
  //         { extensionCategory: 'Macadamia, Hazelnuts & Pecans', url: 'https://www.coles.com.au/browse/fruit-vegetables/scoop-weigh/macadamia-hazelnuts-pecans' },
  //         { extensionCategory: 'Mixed Scoop & Weigh', url: 'https://www.coles.com.au/browse/fruit-vegetables/scoop-weigh/mixed-scoop-weigh' },
  //         { extensionCategory: 'Other Scoop & Weigh', url: 'https://www.coles.com.au/browse/fruit-vegetables/scoop-weigh/other-scoop-weigh' },
  //         { extensionCategory: 'Walnuts, Pistachio & Peanut', url: 'https://www.coles.com.au/browse/fruit-vegetables/scoop-weigh/walnuts-pistachio-peanut' },
  //        ],
  //     },
  //   ],
  // },
  {
    category: 'Health & Beauty',
    subCategories: [
      {
        subCategory: 'Continence Care',
        childItems: [
          { extensionCategory: 'Continence Pads', url: 'https://www.coles.com.au/browse/health-beauty/continence-care/continence-pads' },
          { extensionCategory: 'Female Washable Underwear', url: 'https://www.coles.com.au/browse/health-beauty/continence-care/female-washable-underwear' },
          { extensionCategory: 'Liners', url: 'https://www.coles.com.au/browse/health-beauty/continence-care/liners' },
          { extensionCategory: 'Male Pads', url: 'https://www.coles.com.au/browse/health-beauty/continence-care/male-pads' },
          { extensionCategory: 'Male Pants', url: 'https://www.coles.com.au/browse/health-beauty/continence-care/male-pants' },
          { extensionCategory: 'Male Washable Underwear', url: 'https://www.coles.com.au/browse/health-beauty/continence-care/male-washable-underwear' },
          { extensionCategory: 'Mens Pouches & Shields', url: 'https://www.coles.com.au/browse/health-beauty/continence-care/mens-pouches-shields' },
          { extensionCategory: 'Pants', url: 'https://www.coles.com.au/browse/health-beauty/continence-care/pants' },
        ],
      },
      {
        subCategory: 'Cosmetics',
        childItems: [
          { extensionCategory: 'Blush', url: 'https://www.coles.com.au/browse/health-beauty/cosmetics/blush' },
          { extensionCategory: 'Brows', url: 'https://www.coles.com.au/browse/health-beauty/cosmetics/brows' },
          { extensionCategory: 'Brushes and Tools', url: 'https://www.coles.com.au/browse/health-beauty/cosmetics/brushes-and-tools' },
          { extensionCategory: 'Concealer & Foundation', url: 'https://www.coles.com.au/browse/health-beauty/cosmetics/concealer-foundation' },
          { extensionCategory: 'Eye Liner, Eye Shadow & Mascara', url: 'https://www.coles.com.au/browse/health-beauty/cosmetics/eye-liner-eye-shadow-mascara' },
          { extensionCategory: 'Lashes', url: 'https://www.coles.com.au/browse/health-beauty/cosmetics/lashes' },
          { extensionCategory: 'Lips', url: 'https://www.coles.com.au/browse/health-beauty/cosmetics/lips' },
          { extensionCategory: 'Nails', url: 'https://www.coles.com.au/browse/health-beauty/cosmetics/nails' },
        ],
      },
      {
        subCategory: 'Dental Care',
        childItems: [
          { extensionCategory: 'Dental Floss & Tape', url: 'https://www.coles.com.au/browse/health-beauty/dental-care/dental-floss-tape' },
          //29410 { extensionCategory: 'Dental Whitening', url: 'https://www.coles.com.au/browse/health-beauty/dental-care/dental-whitening' },
          // { extensionCategory: 'Denture Care', url: 'https://www.coles.com.au/browse/health-beauty/dental-care/denture-care' },
          // { extensionCategory: 'Electric Toothbushes and Refills', url: 'https://www.coles.com.au/browse/health-beauty/dental-care/electric-toothbushes-and-refills' },
          // { extensionCategory: 'Kids Dental', url: 'https://www.coles.com.au/browse/health-beauty/dental-care/kids-dental' },
          // { extensionCategory: 'Mouthwash', url: 'https://www.coles.com.au/browse/health-beauty/dental-care/mouthwash' },
          // { extensionCategory: 'Sensitive Toothpaste', url: 'https://www.coles.com.au/browse/health-beauty/dental-care/sensitive-toothpaste' },
          // { extensionCategory: 'Toothbrushes', url: 'https://www.coles.com.au/browse/health-beauty/dental-care/toothbrushes' },
          // { extensionCategory: 'Toothpaste', url: 'https://www.coles.com.au/browse/health-beauty/dental-care/toothpaste' },
        ],
      },
      // {
      //   subCategory: 'First Aid & Medicinal',
      //   childItems: [
      //     { extensionCategory: 'Antacid & Indigestion', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/antacid-indigestion' },
      //     { extensionCategory: 'Antiseptic', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/antiseptic' },
      //     { extensionCategory: 'Bandages & Strapping', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/bandages-strapping' },
      //     { extensionCategory: 'Bandaids', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/bandaids' },
      //     { extensionCategory: 'Cold, Flu and Allergy', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/cold-flu-and-allergy' },
      //     { extensionCategory: 'Cotton Wool & Cotton Buds', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/cotton-wool-cotton-buds' },
      //     { extensionCategory: 'Eye & Ear Care', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/eye-ear-care' },
      //     { extensionCategory: 'Masks & Tests', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/masks-tests' },
      //     { extensionCategory: 'Medicinal Oils & Ointments', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/medicinal-oils-ointments' },
      //     { extensionCategory: 'Other First Aid & Medicinal', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/other-first-aid-medicinal' },
      //     { extensionCategory: 'Pain Relief', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/pain-relief' },
      //     { extensionCategory: 'Quit Smoking', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/quit-smoking' },
      //   ],
      // },
      // {
      //   subCategory: 'Hair Care',
      //   childItems: [
      //     { extensionCategory: 'Colouring', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/colouring' },
      //     { extensionCategory: 'Dandruff', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/dandruff' },
      //     { extensionCategory: 'Dry Shampoo', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/dry-shampoo' },
      //     { extensionCategory: 'Gel, Mousse & Styling', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/gel-mousse-styling' },
      //     { extensionCategory: 'Hair Brushes, Combs & Accessories', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/hair-brushes-combs-accessories' },
      //     { extensionCategory: 'Kids Hair Care', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/kids-hair-care' },
      //     { extensionCategory: 'Lice Treatment', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/lice-treatment' },
      //     { extensionCategory: 'Mens Hair Care', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/mens-hair-care' },
      //     { extensionCategory: 'Shampoo & Conditioner', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/shampoo-conditioner' },
      //     { extensionCategory: 'Treatments', url: 'https://www.coles.com.au/browse/health-beauty/hair-care/treatments' },
      //   ],
      // },
      // {
      //   subCategory: 'Period Care',
      //   childItems: [
      //     { extensionCategory: 'Accessories', url: 'https://www.coles.com.au/browse/health-beauty/period-care/accessories' },
      //     { extensionCategory: 'Liners', url: 'https://www.coles.com.au/browse/health-beauty/period-care/liners' },
      //     { extensionCategory: 'Pads', url: 'https://www.coles.com.au/browse/health-beauty/period-care/pads' },
      //     { extensionCategory: 'Reusables', url: 'https://www.coles.com.au/browse/health-beauty/period-care/reusables' },
      //     { extensionCategory: 'Tampons', url: 'https://www.coles.com.au/browse/health-beauty/period-care/tampons' },
      //   ],
      // },
      // {
      //   subCategory: 'Personal Care',
      //   childItems: [
      //     { extensionCategory: 'Footcare', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/footcare' },
      //     { extensionCategory: 'Mens Deodorants', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/mens-deodorants' },
      //     { extensionCategory: 'Pregnancy Tests', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/pregnancy-tests' },
      //     { extensionCategory: 'Sexual Health', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/sexual-health' },
      //     { extensionCategory: 'Womens Deodorants', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/womens-deodorants' },
      //   ],
      // },
      // {
      //   subCategory: 'Shaving & Hair Removal',
      //   childItems: [
      //     { extensionCategory: 'After Shave Care', url: 'https://www.coles.com.au/browse/health-beauty/shaving-hair-removal/after-shave-care' },
      //     { extensionCategory: 'Razors & Blades', url: 'https://www.coles.com.au/browse/health-beauty/shaving-hair-removal/razors-blades' },
      //     { extensionCategory: 'Shave Gel & Foam', url: 'https://www.coles.com.au/browse/health-beauty/shaving-hair-removal/shave-gel-foam' },
      //     { extensionCategory: 'Wax, Cream & Bleach', url: 'https://www.coles.com.au/browse/health-beauty/shaving-hair-removal/wax-cream-bleach' },
      //   ],
      // },
      // {
      //   subCategory: 'Shower & Bath Care',
      //   childItems: [
      //     { extensionCategory: 'Bath Accessories', url: 'https://www.coles.com.au/browse/health-beauty/shower-bath-care/bath-accessories' },
      //     { extensionCategory: 'Body Lotion', url: 'https://www.coles.com.au/browse/health-beauty/shower-bath-care/body-lotion' },
      //     { extensionCategory: 'Body Wash', url: 'https://www.coles.com.au/browse/health-beauty/shower-bath-care/body-wash' },
      //     { extensionCategory: 'Bubble Bath & Salts', url: 'https://www.coles.com.au/browse/health-beauty/shower-bath-care/bubble-bath-salts' },
      //     { extensionCategory: 'Hand Santiser', url: 'https://www.coles.com.au/browse/health-beauty/shower-bath-care/hand-santiser' },
      //     { extensionCategory: 'Mens Body Wash', url: 'https://www.coles.com.au/browse/health-beauty/shower-bath-care/mens-body-wash' },
      //     { extensionCategory: 'Soap & Hand Wash', url: 'https://www.coles.com.au/browse/health-beauty/shower-bath-care/soap-hand-wash' },
      //   ],
      // },
      // {
      //   subCategory: 'Skin Care',
      //   childItems: [
      //     { extensionCategory: 'Body Moisturiser', url: 'https://www.coles.com.au/browse/health-beauty/skin-care/body-moisturiser' },
      //     { extensionCategory: 'Cleansers & Skincare Wipes', url: 'https://www.coles.com.au/browse/health-beauty/skin-care/cleansers-skincare-wipes' },
      //     { extensionCategory: 'Face Moisturiser', url: 'https://www.coles.com.au/browse/health-beauty/skin-care/face-moisturiser' },
      //     { extensionCategory: 'Hand Moisturiser', url: 'https://www.coles.com.au/browse/health-beauty/skin-care/hand-moisturiser' },
      //     { extensionCategory: 'Lip Care', url: 'https://www.coles.com.au/browse/health-beauty/skin-care/lip-care' },
      //     { extensionCategory: 'Mens Skin', url: 'https://www.coles.com.au/browse/health-beauty/skin-care/mens-skin' },
      //     { extensionCategory: 'Self-Tanning', url: 'https://www.coles.com.au/browse/health-beauty/skin-care/self-tanning' },
      //   ],
      // },
      // {
      //   subCategory: 'Sun Protection',
      //   childItems: [
      //     { extensionCategory: 'After Sun', url: 'https://www.coles.com.au/browse/health-beauty/sun-protection/after-sun' },
      //     { extensionCategory: 'Sun Care', url: 'https://www.coles.com.au/browse/health-beauty/sun-protection/sun-care' },
      //   ],
      // },
      // {
      //   subCategory: 'Travel Packs and Minis',
      //   childItems: [
      //     { extensionCategory: 'Travel Packs and Accessories', url: 'https://www.coles.com.au/browse/health-beauty/travel-packs-and-minis/travel-packs-and-accessories' },
      //   ],
      // },
      // {
      //   subCategory: 'Vitamins & Supplements',
      //   childItems: [
      //     { extensionCategory: 'Bone and Joint Health', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/bone-and-joint-health' },
      //     { extensionCategory: 'Brain, Eye and Heart Health', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/brain-eye-and-heart-health' },
      //     { extensionCategory: 'Detox and Digestive Health', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/detox-and-digestive-health' },
      //     { extensionCategory: 'Energy Support', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/energy-support' },
      //     { extensionCategory: 'Essential Oils and Aroma Therapy', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/essential-oils-and-aroma-therapy' },
      //     { extensionCategory: 'Family Planning', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/family-planning' },
      //     { extensionCategory: 'Fish Oil', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/fish-oil' },
      //     { extensionCategory: 'Hair, Skin & Nails', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/hair-skin-nails' },
      //     { extensionCategory: 'Immune Support', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/immune-support' },
      //     { extensionCategory: 'Iron', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/iron' },
      //     { extensionCategory: `Kid's Health`, url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/kids-health' },
      //     { extensionCategory: 'Mens and Womens Multi Vitamins', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/mens-and-womens-multi-vitamins' },
      //     { extensionCategory: 'Other Vitamins', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/other-vitamins' },
      //     { extensionCategory: 'Sleep Support', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/sleep-support' }, // added
      //     { extensionCategory: 'Supplements and Superfoods', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements/supplements-and-superfoods' }, // added
      //   ],
      // },
    ],
  },
  // {
  //   category: 'Household',
  //   subCategories: [
  //     {
  //       subCategory: 'Air Fresheners & Home Fragrance',
  //       childItems: [
  //         { extensionCategory: 'All Airfreshners', url: 'https://www.coles.com.au/browse/household/air-fresheners-home-fragrance/all-airfreshners' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Charity Donations',
  //       childItems: [
  //         { extensionCategory: 'Donations', url: 'https://www.coles.com.au/browse/household/charity-donations/donations' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Cleaning Goods',
  //       childItems: [
  //         { extensionCategory: 'Bathroom Cleaners', url: 'https://www.coles.com.au/browse/household/cleaning-goods/bathroom-cleaners' },
  //         { extensionCategory: 'Bleach', url: 'https://www.coles.com.au/browse/household/cleaning-goods/bleach' },
  //         { extensionCategory: 'Cleaning Accessories', url: 'https://www.coles.com.au/browse/household/cleaning-goods/cleaning-accessories' },
  //         { extensionCategory: 'Cleaning Gloves', url: 'https://www.coles.com.au/browse/household/cleaning-goods/cleaning-gloves' },
  //         { extensionCategory: 'Drain & Solvents', url: 'https://www.coles.com.au/browse/household/cleaning-goods/drain-solvents' },
  //         { extensionCategory: 'Fabric, Metal & Furniture', url: 'https://www.coles.com.au/browse/household/cleaning-goods/fabric-metal-furniture' },
  //         { extensionCategory: 'Floor & Carpet Cleaners', url: 'https://www.coles.com.au/browse/household/cleaning-goods/floor-carpet-cleaners' },
  //         { extensionCategory: 'Kitchen Cleaners', url: 'https://www.coles.com.au/browse/household/cleaning-goods/kitchen-cleaners' },
  //         { extensionCategory: 'Mops, Buckets & Brooms', url: 'https://www.coles.com.au/browse/household/cleaning-goods/mops-buckets-brooms' },
  //         { extensionCategory: 'Mould Killers & Disinfectants', url: 'https://www.coles.com.au/browse/household/cleaning-goods/mould-killers-disinfectants' },
  //         { extensionCategory: 'Multipurpose Cleaners', url: 'https://www.coles.com.au/browse/household/cleaning-goods/multipurpose-cleaners' },
  //         { extensionCategory: 'Paper Towels, Sponges and Brushes', url: 'https://www.coles.com.au/browse/household/cleaning-goods/paper-towels-sponges-and-brushes' },
  //         { extensionCategory: 'Sponges, Cloths & Wipes', url: 'https://www.coles.com.au/browse/household/cleaning-goods/sponges-cloths-wipes' },
  //         { extensionCategory: 'Toilet Cleaning', url: 'https://www.coles.com.au/browse/household/cleaning-goods/toilet-cleaning' },
  //         { extensionCategory: 'Windows & Glass', url: 'https://www.coles.com.au/browse/household/cleaning-goods/windows-glass' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Clothing & Accessories',
  //       childItems: [
  //         { extensionCategory: 'Babywear', url: 'https://www.coles.com.au/browse/household/clothing-accessories/babywear' },
  //         { extensionCategory: `Children's Socks`, url: 'https://www.coles.com.au/browse/household/clothing-accessories/childrens-socks' },
  //         { extensionCategory: `Men's Socks`, url: 'https://www.coles.com.au/browse/household/clothing-accessories/mens-socks' },
  //         { extensionCategory: `Men's Underwear`, url: 'https://www.coles.com.au/browse/household/clothing-accessories/mens-underwear' },
  //         { extensionCategory: 'Seasonal Accessories', url: 'https://www.coles.com.au/browse/household/clothing-accessories/seasonal-accessories' },
  //         { extensionCategory: 'Shoe Care and Footwear', url: 'https://www.coles.com.au/browse/household/clothing-accessories/shoe-care-and-footwear' },
  //         { extensionCategory: `Women's Hosiery`, url: 'https://www.coles.com.au/browse/household/clothing-accessories/womens-hosiery' },
  //         { extensionCategory: `Women's Socks`, url: 'https://www.coles.com.au/browse/household/clothing-accessories/womens-socks' },
  //         { extensionCategory: `Women's Underwear`, url: 'https://www.coles.com.au/browse/household/clothing-accessories/womens-underwear' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Craft, Toys & Games',
  //       childItems: [
  //         { extensionCategory: 'Baby Toys', url: 'https://www.coles.com.au/browse/household/craft-toys-games/baby-toys' },
  //         { extensionCategory: 'Games & Hobbies', url: 'https://www.coles.com.au/browse/household/craft-toys-games/games-hobbies' },
  //         { extensionCategory: 'Toys', url: 'https://www.coles.com.au/browse/household/craft-toys-games/toys' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Dishwashing',
  //       childItems: [
  //         { extensionCategory: 'All Paper Towels', url: 'https://www.coles.com.au/browse/household/dishwashing/all-paper-towels' },
  //         { extensionCategory: 'Dishwasher Additives', url: 'https://www.coles.com.au/browse/household/dishwashing/dishwasher-additives' },
  //         { extensionCategory: 'Dishwasher Tablets, Powder & Gel', url: 'https://www.coles.com.au/browse/household/dishwashing/dishwasher-tablets-powder-gel' },
  //         { extensionCategory: 'Dishwashing Liquid', url: 'https://www.coles.com.au/browse/household/dishwashing/dishwashing-liquid' },
  //         { extensionCategory: 'Gloves', url: 'https://www.coles.com.au/browse/household/dishwashing/gloves' },
  //         { extensionCategory: 'Sponges & Scourers', url: 'https://www.coles.com.au/browse/household/dishwashing/sponges-scourers' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Diy & Car',
  //       childItems: [
  //         { extensionCategory: 'Adhesives, Glues & Tapes', url: 'https://www.coles.com.au/browse/household/diy-car/adhesives-glues-tapes' },
  //         { extensionCategory: 'Car Care', url: 'https://www.coles.com.au/browse/household/diy-car/car-care' },
  //         { extensionCategory: 'Car Oil & Coolants', url: 'https://www.coles.com.au/browse/household/diy-car/car-oil-coolants' },
  //         { extensionCategory: 'Home Maintenance', url: 'https://www.coles.com.au/browse/household/diy-car/home-maintenance' },
  //         { extensionCategory: 'Hooks & Fasteners', url: 'https://www.coles.com.au/browse/household/diy-car/hooks-fasteners' },
  //         // { extensionCategory: 'Security', url: 'https://www.coles.com.au/browse/household/diy-car/security' },
  //         // { extensionCategory: 'Tools & Accessories', url: 'https://www.coles.com.au/browse/household/diy-car/tools-accessories' },
  //       ],
  //     },
  //     // {
  //     //   subCategory: 'Electrical',
  //     //   childItems: [
  //     //     { extensionCategory: 'Batteries', url: 'https://www.coles.com.au/browse/household/electrical/batteries' },
  //     //     { extensionCategory: 'Extension Cords & Adapters', url: 'https://www.coles.com.au/browse/household/electrical/extension-cords-adapters' },
  //     //     { extensionCategory: 'Lighting', url: 'https://www.coles.com.au/browse/household/electrical/lighting' },
  //     //     { extensionCategory: 'Phone Accessories & Earphones', url: 'https://www.coles.com.au/browse/household/electrical/phone-accessories-earphones' },
  //     //     { extensionCategory: 'Torches', url: 'https://www.coles.com.au/browse/household/electrical/torches' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Food Storage',
  //     //   childItems: [
  //     //     { extensionCategory: 'Containers & Tubs', url: 'https://www.coles.com.au/browse/household/food-storage/containers-tubs' },
  //     //     { extensionCategory: 'Freezer Bags & Sandwich', url: 'https://www.coles.com.au/browse/household/food-storage/freezer-bags-sandwich' },
  //     //     { extensionCategory: 'Plastic Wrap & Bags', url: 'https://www.coles.com.au/browse/household/food-storage/plastic-wrap-bags' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Garden',
  //     //   childItems: [
  //     //     { extensionCategory: 'Gloves & Tools', url: 'https://www.coles.com.au/browse/household/garden/gloves-tools' },
  //     //     { extensionCategory: 'Insecticide & Weed Control', url: 'https://www.coles.com.au/browse/household/garden/insecticide-weed-control' },
  //     //     { extensionCategory: 'Lawncare & Plant Food', url: 'https://www.coles.com.au/browse/household/garden/lawncare-plant-food' },
  //     //     { extensionCategory: 'Potting Mix & Fertilizer', url: 'https://www.coles.com.au/browse/household/garden/potting-mix-fertilizer' },
  //     //     { extensionCategory: 'Seeds & Plants', url: 'https://www.coles.com.au/browse/household/garden/seeds-plants' },
  //     //     { extensionCategory: 'Watering', url: 'https://www.coles.com.au/browse/household/garden/watering' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Homewares',
  //     //   childItems: [
  //     //     { extensionCategory: 'Appliances', url: 'https://www.coles.com.au/browse/household/homewares/appliances' },
  //     //     { extensionCategory: 'Cutlery & Servingware', url: 'https://www.coles.com.au/browse/household/homewares/cutlery-servingware' },
  //     //     { extensionCategory: 'Glassware', url: 'https://www.coles.com.au/browse/household/homewares/glassware' },
  //     //     { extensionCategory: 'Home Storage', url: 'https://www.coles.com.au/browse/household/homewares/home-storage' },
  //     //     { extensionCategory: 'Mugs & Cups', url: 'https://www.coles.com.au/browse/household/homewares/mugs-cups' },
  //     //     { extensionCategory: 'Plates & Bowls', url: 'https://www.coles.com.au/browse/household/homewares/plates-bowls' },
  //     //     { extensionCategory: 'Seasonal Decorations & Accessories', url: 'https://www.coles.com.au/browse/household/homewares/seasonal-decorations-accessories' },
  //     //     { extensionCategory: 'Sewing', url: 'https://www.coles.com.au/browse/household/homewares/sewing' },
  //     //     { extensionCategory: 'Tea Towels & Aprons', url: 'https://www.coles.com.au/browse/household/homewares/tea-towels-aprons' },
  //     //     { extensionCategory: 'Textiles & Accessories', url: 'https://www.coles.com.au/browse/household/homewares/textiles-accessories' },
  //     //     { extensionCategory: 'Water Filtration', url: 'https://www.coles.com.au/browse/household/homewares/water-filtration' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Kitchen',
  //     //   childItems: [
  //     //     { extensionCategory: 'Baking Tins & Trays', url: 'https://www.coles.com.au/browse/household/kitchen/baking-tins-trays' },
  //     //     { extensionCategory: 'Foil, Baking Paper & Oven Bags', url: 'https://www.coles.com.au/browse/household/kitchen/foil-baking-paper-oven-bags' },
  //     //     { extensionCategory: 'Food Tubs & Containers', url: 'https://www.coles.com.au/browse/household/kitchen/food-tubs-containers' },
  //     //     // { extensionCategory: 'Kitchen Tidy & Garbage Bags', url: 'https://www.coles.com.au/browse/household/kitchen/kitchen-tidy-garbage-bags' },
  //     //     // { extensionCategory: 'Plastic Wraps & Bags', url: 'https://www.coles.com.au/browse/household/kitchen/plastic-wraps-bags' },
  //     //     // { extensionCategory: 'Pots & Saucepans', url: 'https://www.coles.com.au/browse/household/kitchen/pots-saucepans' },
  //     //     // { extensionCategory: 'Sandwich & Freezer Bags', url: 'https://www.coles.com.au/browse/household/kitchen/sandwich-freezer-bags' },
  //     //     // { extensionCategory: 'Utensils & Gadgets', url: 'https://www.coles.com.au/browse/household/kitchen/utensils-gadgets' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Laundry',
  //     //   childItems: [
  //     //     { extensionCategory: 'Fabric Softener', url: 'https://www.coles.com.au/browse/household/laundry/fabric-softener' },
  //     //     { extensionCategory: 'Ironing Aids', url: 'https://www.coles.com.au/browse/household/laundry/ironing-aids' },
  //     //     { extensionCategory: 'Laundry Accessories', url: 'https://www.coles.com.au/browse/household/laundry/laundry-accessories' },
  //     //     { extensionCategory: 'Laundry Liquid', url: 'https://www.coles.com.au/browse/household/laundry/laundry-liquid' },
  //     //     { extensionCategory: 'Laundry Powder', url: 'https://www.coles.com.au/browse/household/laundry/laundry-powder' },
  //     //     { extensionCategory: 'Pegs, Baskets & Hangers', url: 'https://www.coles.com.au/browse/household/laundry/pegs-baskets-hangers' },
  //     //     { extensionCategory: 'Stain Removal & Pre-Wash', url: 'https://www.coles.com.au/browse/household/laundry/stain-removal-pre-wash' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Mobile & Tech Accessories',
  //     //   childItems: [
  //     //     { extensionCategory: 'Phones', url: 'https://www.coles.com.au/browse/household/mobile-tech-accessories/phones' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Outdoors',
  //     //   childItems: [
  //     //     { extensionCategory: 'Automotive', url: 'https://www.coles.com.au/browse/household/outdoors/automotive' },
  //     //     { extensionCategory: 'Bbq', url: 'https://www.coles.com.au/browse/household/outdoors/bbq' },
  //     //     { extensionCategory: 'Camping & Fishing', url: 'https://www.coles.com.au/browse/household/outdoors/camping-fishing' },
  //     //     { extensionCategory: 'Matches & Lighters', url: 'https://www.coles.com.au/browse/household/outdoors/matches-lighters' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Party Supplies',
  //     //   childItems: [
  //     //     { extensionCategory: 'Candles', url: 'https://www.coles.com.au/browse/household/party-supplies/candles' },
  //     //     { extensionCategory: 'Cups & Glasses', url: 'https://www.coles.com.au/browse/household/party-supplies/cups-glasses' },
  //     //     { extensionCategory: 'Decorations', url: 'https://www.coles.com.au/browse/household/party-supplies/decorations' },
  //     //     { extensionCategory: 'Disposable Plates & Bowls', url: 'https://www.coles.com.au/browse/household/party-supplies/disposable-plates-bowls' },
  //     //     { extensionCategory: 'Gift Wrap & Bags', url: 'https://www.coles.com.au/browse/household/party-supplies/gift-wrap-bags' },
  //     //     { extensionCategory: 'Paper & Plastic Cutlery', url: 'https://www.coles.com.au/browse/household/party-supplies/paper-plastic-cutlery' },
  //     //     { extensionCategory: 'Serviettes & Tablecloths', url: 'https://www.coles.com.au/browse/household/party-supplies/serviettes-tablecloths' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Pest Control',
  //     //   childItems: [
  //     //     { extensionCategory: 'Crawling Insects', url: 'https://www.coles.com.au/browse/household/pest-control/crawling-insects' },
  //     //     { extensionCategory: 'Flying Insects', url: 'https://www.coles.com.au/browse/household/pest-control/flying-insects' },
  //     //     { extensionCategory: 'Garden Pests', url: 'https://www.coles.com.au/browse/household/pest-control/garden-pests' },
  //     //     { extensionCategory: 'Mosquitos', url: 'https://www.coles.com.au/browse/household/pest-control/mosquitos' },
  //     //     { extensionCategory: 'Rodents', url: 'https://www.coles.com.au/browse/household/pest-control/rodents' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Reusable Shopping Bags',
  //     //   childItems: [
  //     //     { extensionCategory: 'Chiller Bags & Bags', url: 'https://www.coles.com.au/browse/household/reusable-shopping-bags/chiller-bags-bags' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Sporting Essentials',
  //     //   childItems: [
  //     //     { extensionCategory: 'Sports Goods & Accessories', url: 'https://www.coles.com.au/browse/household/sporting-essentials/sports-goods-accessories' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Stationery & Media',
  //     //   childItems: [
  //     //     { extensionCategory: 'Magazines', url: 'https://www.coles.com.au/browse/household/stationery-media/magazines' },
  //     //     { extensionCategory: 'Media', url: 'https://www.coles.com.au/browse/household/stationery-media/media' },
  //     //     // { extensionCategory: 'Stationery', url: 'https://www.coles.com.au/browse/household/stationery-media/stationery' },
  //     //     // { extensionCategory: 'Toys & Game', url: 'https://www.coles.com.au/browse/household/stationery-media/toys-game' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Tech Accessories',
  //     //   childItems: [
  //     //     { extensionCategory: 'All Accessories', url: 'https://www.coles.com.au/browse/household/tech-accessories/all-accessories' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Toilet Paper, Tissues & Paper Towels',
  //     //   childItems: [
  //     //     { extensionCategory: 'Facial Tissues', url: 'https://www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels/facial-tissues' },
  //     //     { extensionCategory: 'Flushable Wipes', url: 'https://www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels/flushable-wipes' },
  //     //     { extensionCategory: 'Paper Towel', url: 'https://www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels/paper-towel' },
  //     //     { extensionCategory: 'Toilet Tissues', url: 'https://www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels/toilet-tissues' },
  //     //   ],
  //     // },
  //   ],
  // },
  // {
  //   category: 'Pantry',
  //   subCategories: [
  //     {
  //       subCategory: 'Baking',
  //       childItems: [
  //         { extensionCategory: 'Breadcrumbs & Stuffing', url: 'https://www.coles.com.au/browse/pantry/baking/breadcrumbs-stuffing' },
  //         { extensionCategory: 'Cake & Bread Mixes', url: 'https://www.coles.com.au/browse/pantry/baking/cake-bread-mixes' },
  //         { extensionCategory: 'Cake Decorating', url: 'https://www.coles.com.au/browse/pantry/baking/cake-decorating' },
  //         { extensionCategory: 'Cooking Chocolate & Cocoa', url: 'https://www.coles.com.au/browse/pantry/baking/cooking-chocolate-cocoa' },
  //         { extensionCategory: 'Dried Fruits & Fillings', url: 'https://www.coles.com.au/browse/pantry/baking/dried-fruits-fillings' },
  //         { extensionCategory: 'Essence & Food Colouring', url: 'https://www.coles.com.au/browse/pantry/baking/essence-food-colouring' },
  //         { extensionCategory: 'Flour', url: 'https://www.coles.com.au/browse/pantry/baking/flour' },
  //         { extensionCategory: 'Nuts for Baking', url: 'https://www.coles.com.au/browse/pantry/baking/nuts-for-baking' },
  //         { extensionCategory: 'Pancake & Dessert Mixes', url: 'https://www.coles.com.au/browse/pantry/baking/pancake-dessert-mixes' },
  //         { extensionCategory: 'Sugar & Sweeteners', url: 'https://www.coles.com.au/browse/pantry/baking/sugar-sweeteners' },
  //         { extensionCategory: 'Yeast & Baking Agents', url: 'https://www.coles.com.au/browse/pantry/baking/yeast-baking-agents' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Breakfast',
  //       childItems: [
  //         { extensionCategory: 'Breakfast Cereal', url: 'https://www.coles.com.au/browse/pantry/breakfast/breakfast-cereal' },
  //         { extensionCategory: 'Breakfast Muesli', url: 'https://www.coles.com.au/browse/pantry/breakfast/breakfast-muesli' },
  //         { extensionCategory: 'Breakfast Oats', url: 'https://www.coles.com.au/browse/pantry/breakfast/breakfast-oats' },
  //         { extensionCategory: 'Family Favourites', url: 'https://www.coles.com.au/browse/pantry/breakfast/family-favourites' },
  //         { extensionCategory: 'Gluten Free Cereal', url: 'https://www.coles.com.au/browse/pantry/breakfast/gluten-free-cereal' },
  //         { extensionCategory: 'Healthier Start', url: 'https://www.coles.com.au/browse/pantry/breakfast/healthier-start' },
  //         { extensionCategory: 'On the Go', url: 'https://www.coles.com.au/browse/pantry/breakfast/on-the-go' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Canned Food, Soups & Noodles',
  //       childItems: [
  //         { extensionCategory: 'Baked Beans & Spaghetti', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/baked-beans-spaghetti' },
  //         { extensionCategory: 'Canned Beans & Legumes', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-beans-legumes' },
  //         { extensionCategory: 'Canned Fruit', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-fruit' },
  //         { extensionCategory: 'Canned Meat', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-meat' },
  //         { extensionCategory: 'Canned Vegetables', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-vegetables' },
  //         // { extensionCategory: 'Condensed & Evaporated Milk', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/condensed-evaporated-milk' },
  //         // { extensionCategory: 'Fish & Seafood', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/fish-seafood' },
  //         // { extensionCategory: 'Instant Meals & Sides', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/instant-meals-sides' },
  //         // { extensionCategory: 'Noodles', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/noodles' },
  //         // { extensionCategory: 'Soups', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/soups' },
  //       ],
  //     },
  //     // {
  //     //   subCategory: 'Coffee',
  //     //   childItems: [
  //     //     { extensionCategory: 'Capsules', url: 'https://www.coles.com.au/browse/pantry/coffee/capsules' },
  //     //     { extensionCategory: 'Coffee Accessories', url: 'https://www.coles.com.au/browse/pantry/coffee/coffee-accessories' },
  //     //     { extensionCategory: 'Coffee Beans', url: 'https://www.coles.com.au/browse/pantry/coffee/coffee-beans' },
  //     //     { extensionCategory: 'Coffee Mixes', url: 'https://www.coles.com.au/browse/pantry/coffee/coffee-mixes' },
  //     //     { extensionCategory: 'Ground Coffee', url: 'https://www.coles.com.au/browse/pantry/coffee/ground-coffee' },
  //     //     { extensionCategory: 'Instant Coffee', url: 'https://www.coles.com.au/browse/pantry/coffee/instant-coffee' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Desserts',
  //     //   childItems: [
  //     //     { extensionCategory: 'Custard, Cream & Yoghurt Desserts', url: 'https://www.coles.com.au/browse/pantry/desserts/custard-cream-yoghurt-desserts' },
  //     //     { extensionCategory: 'Icecream Cones, Syrups & Toppings', url: 'https://www.coles.com.au/browse/pantry/desserts/icecream-cones-syrups-toppings' },
  //     //     { extensionCategory: 'Jelly', url: 'https://www.coles.com.au/browse/pantry/desserts/jelly' },
  //     //     { extensionCategory: 'Puddings', url: 'https://www.coles.com.au/browse/pantry/desserts/puddings' },
  //     //     { extensionCategory: 'ready-to-freeze Ice Blocks', url: 'https://www.coles.com.au/browse/pantry/desserts/ready-to-freeze-ice-blocks' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Health Foods',
  //     //   childItems: [
  //     //     { extensionCategory: 'Healthy Breakfasts', url: 'https://www.coles.com.au/browse/pantry/health-foods/healthy-breakfasts' },
  //     //     { extensionCategory: 'Healthy Cooking', url: 'https://www.coles.com.au/browse/pantry/health-foods/healthy-cooking' },
  //     //     { extensionCategory: 'Healthy Snacks', url: 'https://www.coles.com.au/browse/pantry/health-foods/healthy-snacks' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Health Foods Sports Nutrition & Diet',
  //     //   childItems: [
  //     //     { extensionCategory: 'Collagen', url: 'https://www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/collagen' },
  //     //     { extensionCategory: 'Diet Slimming Aids', url: 'https://www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/diet-slimming-aids' },
  //     //     { extensionCategory: 'Energy Gels/Tablets', url: 'https://www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/energy-gels-tablets' },
  //     //     { extensionCategory: 'Nutrition Powders', url: 'https://www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/nutrition-powders' },
  //     //     { extensionCategory: 'Protein Bars & Balls', url: 'https://www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/protein-bars-balls' },
  //     //     { extensionCategory: 'Rtd Protein Shakes', url: 'https://www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/rtd-protein-shakes' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Herbs & Spices',
  //     //   childItems: [
  //     //     { extensionCategory: 'Dried Herbs & Spices', url: 'https://www.coles.com.au/browse/pantry/herbs-spices/dried-herbs-spices' },
  //     //     { extensionCategory: 'Dried Spices', url: 'https://www.coles.com.au/browse/pantry/herbs-spices/dried-spices' },
  //     //     { extensionCategory: 'Jars & Pastes', url: 'https://www.coles.com.au/browse/pantry/herbs-spices/jars-pastes' },
  //     //     { extensionCategory: 'Packet Seasonings', url: 'https://www.coles.com.au/browse/pantry/herbs-spices/packet-seasonings' },
  //     //     { extensionCategory: 'Salt & Pepper', url: 'https://www.coles.com.au/browse/pantry/herbs-spices/salt-pepper' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'International Foods',
  //     //   childItems: [
  //     //     { extensionCategory: 'Asian', url: 'https://www.coles.com.au/browse/pantry/international-foods/asian' },
  //     //     { extensionCategory: 'European', url: 'https://www.coles.com.au/browse/pantry/international-foods/european' },
  //     //     { extensionCategory: 'Indian', url: 'https://www.coles.com.au/browse/pantry/international-foods/indian' },
  //     //     { extensionCategory: 'Kosher', url: 'https://www.coles.com.au/browse/pantry/international-foods/kosher' },
  //     //     { extensionCategory: 'Mediterranean', url: 'https://www.coles.com.au/browse/pantry/international-foods/mediterranean' },
  //     //     { extensionCategory: 'Mexican', url: 'https://www.coles.com.au/browse/pantry/international-foods/mexican' },
  //     //     { extensionCategory: 'Middle Eastern', url: 'https://www.coles.com.au/browse/pantry/international-foods/middle-eastern' },
  //     //     { extensionCategory: 'New Zealand', url: 'https://www.coles.com.au/browse/pantry/international-foods/new-zealand' },
  //     //     { extensionCategory: 'South African', url: 'https://www.coles.com.au/browse/pantry/international-foods/south-african' },
  //     //     { extensionCategory: 'Uk', url: 'https://www.coles.com.au/browse/pantry/international-foods/uk' },
  //     //     { extensionCategory: 'Usa', url: 'https://www.coles.com.au/browse/pantry/international-foods/usa' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Jams, Honey & Spreads',
  //     //   childItems: [
  //     //     { extensionCategory: 'Chocolate Spreads', url: 'https://www.coles.com.au/browse/pantry/jams-honey-spreads/chocolate-spreads' },
  //     //     { extensionCategory: 'Honey', url: 'https://www.coles.com.au/browse/pantry/jams-honey-spreads/honey' },
  //     //     { extensionCategory: 'Jams', url: 'https://www.coles.com.au/browse/pantry/jams-honey-spreads/jams' },
  //     //     { extensionCategory: 'Nut Spreads', url: 'https://www.coles.com.au/browse/pantry/jams-honey-spreads/nut-spreads' },
  //     //     { extensionCategory: 'Savoury Spreads', url: 'https://www.coles.com.au/browse/pantry/jams-honey-spreads/savoury-spreads' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Local Foods',
  //     //   childItems: [
  //     //     { extensionCategory: 'Local Snacks & Drinks', url: 'https://www.coles.com.au/browse/pantry/local-foods/local-snacks-drinks' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Oils & Vinegars',
  //     //   childItems: [
  //     //     { extensionCategory: 'Oil', url: 'https://www.coles.com.au/browse/pantry/oils-vinegars/oil' },
  //     //     { extensionCategory: 'Vinegar', url: 'https://www.coles.com.au/browse/pantry/oils-vinegars/vinegar' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Pasta, Rice, Legumes & Grains',
  //     //   childItems: [
  //     //     { extensionCategory: 'Beans & Legumes', url: 'https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/beans-legumes' },
  //     //     { extensionCategory: 'Fresh Pasta', url: 'https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/fresh-pasta' },
  //     //     { extensionCategory: 'Microwave Rice', url: 'https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/microwave-rice' },
  //     //     { extensionCategory: 'Pasta', url: 'https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/pasta' },
  //     //     { extensionCategory: 'Polenta & Other Grains', url: 'https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/polenta-other-grains' },
  //     //     { extensionCategory: 'Rice', url: 'https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/rice' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Pickled Vegetables & Condiments',
  //     //   childItems: [
  //     //     { extensionCategory: 'Mayonnaise', url: 'https://www.coles.com.au/browse/pantry/pickled-vegetables-condiments/mayonnaise' },
  //     //     { extensionCategory: 'Mustard', url: 'https://www.coles.com.au/browse/pantry/pickled-vegetables-condiments/mustard' },
  //     //     { extensionCategory: 'Pickles, Chutney & Relish', url: 'https://www.coles.com.au/browse/pantry/pickled-vegetables-condiments/pickles-chutney-relish' },
  //     //     { extensionCategory: 'Salad Dressings', url: 'https://www.coles.com.au/browse/pantry/pickled-vegetables-condiments/salad-dressings' },
  //     //     { extensionCategory: 'Syrups & Toppings', url: 'https://www.coles.com.au/browse/pantry/pickled-vegetables-condiments/syrups-toppings' },
  //     //     { extensionCategory: 'Tomato & Bbq Sauces', url: 'https://www.coles.com.au/browse/pantry/pickled-vegetables-condiments/tomato-bbq-sauces' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Sauces',
  //     //   childItems: [
  //     //     { extensionCategory: 'Marinades', url: 'https://www.coles.com.au/browse/pantry/sauces/marinades' },
  //     //     { extensionCategory: 'Mustards', url: 'https://www.coles.com.au/browse/pantry/sauces/mustards' },
  //     //     { extensionCategory: 'Pizza & Pasta', url: 'https://www.coles.com.au/browse/pantry/sauces/pizza-pasta' },
  //     //     { extensionCategory: 'Recipe & Meal Bases', url: 'https://www.coles.com.au/browse/pantry/sauces/recipe-meal-bases' },
  //     //     { extensionCategory: 'Soy & Asian', url: 'https://www.coles.com.au/browse/pantry/sauces/soy-asian' },
  //     //     { extensionCategory: 'Stir-Fry and Curries', url: 'https://www.coles.com.au/browse/pantry/sauces/stir-fry-and-curries' },
  //     //     { extensionCategory: 'Sweet Chilli & Hot', url: 'https://www.coles.com.au/browse/pantry/sauces/sweet-chilli-hot' },
  //     //     { extensionCategory: 'Tomato & Bbq', url: 'https://www.coles.com.au/browse/pantry/sauces/tomato-bbq' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Stocks & Gravy',
  //     //   childItems: [
  //     //     { extensionCategory: 'Dry Stock', url: 'https://www.coles.com.au/browse/pantry/stocks-gravy/dry-stock' },
  //     //     { extensionCategory: 'Gravy', url: 'https://www.coles.com.au/browse/pantry/stocks-gravy/gravy' },
  //     //     { extensionCategory: 'Liquid Stock', url: 'https://www.coles.com.au/browse/pantry/stocks-gravy/liquid-stock' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Tea',
  //     //   childItems: [
  //     //     { extensionCategory: 'Black', url: 'https://www.coles.com.au/browse/pantry/tea/black' },
  //     //     { extensionCategory: 'Bubble Tea', url: 'https://www.coles.com.au/browse/pantry/tea/bubble-tea' },
  //     //     { extensionCategory: 'Chai', url: 'https://www.coles.com.au/browse/pantry/tea/chai' },
  //     //     { extensionCategory: 'Green', url: 'https://www.coles.com.au/browse/pantry/tea/green' },
  //     //     { extensionCategory: 'Herbal', url: 'https://www.coles.com.au/browse/pantry/tea/herbal' },
  //     //     { extensionCategory: 'Loose Leaf', url: 'https://www.coles.com.au/browse/pantry/tea/loose-leaf' },
  //     //     { extensionCategory: 'Organic', url: 'https://www.coles.com.au/browse/pantry/tea/organic' },
  //     //     { extensionCategory: 'White', url: 'https://www.coles.com.au/browse/pantry/tea/white' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Biscuits & Cookies',
  //     //   childItems: [
  //     //     {  extensionCategory: 'Chocolate Biscuits', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/biscuits-cookies/chocolate-biscuits' },
  //     //     {  extensionCategory: 'Cream & Plain Biscuits', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/biscuits-cookies/cream-plain-biscuits' },
  //     //     {  extensionCategory: 'Multipack Biscuits', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/biscuits-cookies/multipack-biscuits' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Chips',
  //     //   childItems: [
  //     //     { extensionCategory: 'Chips Multi Pack', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chips/chips-multi-pack' },
  //     //     { extensionCategory: 'Chips Sharing', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chips/chips-sharing' },
  //     //     { extensionCategory: 'Chips Single Pack', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chips/chips-single-pack' },
  //     //     { extensionCategory: 'Corn Chips & Salsa', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chips/corn-chips-salsa' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Chocolates',
  //     //   childItems: [
  //     //     { extensionCategory: 'Boxed Chocolate & Gifts', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/boxed-chocolate-gifts' },
  //     //     { extensionCategory: 'Chocolate Bars', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/chocolate-bars' },
  //     //     { extensionCategory: 'Chocolate Bites', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/chocolate-bites' },
  //     //     { extensionCategory: 'Chocolate Blocks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/chocolate-blocks' },
  //     //     { extensionCategory: 'Chocolate Multipacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/chocolate-multipacks' },
  //     //     { extensionCategory: 'Seasonal Chocolates', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/seasonal-chocolates' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Crackers & Rice Cakes',
  //     //   childItems: [
  //     //     { extensionCategory: 'Crackers & Crispbreads', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes/crackers-crispbreads' },
  //     //     { extensionCategory: 'Flavoured Snacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes/flavoured-snacks' },
  //     //     { extensionCategory: 'Multipack Crackers', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes/multipack-crackers' },
  //     //     { extensionCategory: 'Rice & Corn Snacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes/rice-corn-snacks' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Gum, Mints & Lozenges',
  //     //   childItems: [
  //     //     { extensionCategory: 'Gum', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/gum-mints-lozenges/gum' },
  //     //     { extensionCategory: 'Medicated Lozenges', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/gum-mints-lozenges/medicated-lozenges' },
  //     //     { extensionCategory: 'Mints', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/gum-mints-lozenges/mints' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Lollies & Licorice',
  //     //   childItems: [
  //     //     { extensionCategory: 'Licorice', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/lollies-licorice/licorice' },
  //     //     { extensionCategory: 'Lollies', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/lollies-licorice/lollies' },
  //     //     ],
  //     // },
  //     // {
  //     //   subCategory: 'Snacks',
  //     //   childItems: [
  //     //     { extensionCategory: 'Muesli Bars & Fruit Snacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/snacks/muesli-bars-fruit-snacks' },
  //     //     { extensionCategory: 'Nuts & Trail Mix', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/snacks/nuts-trail-mix' },
  //     //     { extensionCategory: 'Popcorn', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/snacks/popcorn' },
  //     //     { extensionCategory: 'Pretzels & Other Snacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/snacks/pretzels-other-snacks' },
  //     //     ],
  //     // },
  //   ],
  // },
  // {
  //   category: 'Pet',
  //   subCategories: [
  //     {
  //       subCategory: 'Birds',
  //       childItems: [
  //         { extensionCategory: 'Bird Food', url: 'https://www.coles.com.au/browse/pet/birds/bird-food' },
  //         { extensionCategory: 'Bird Treats', url: 'https://www.coles.com.au/browse/pet/birds/bird-treats' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Cat & Kitten',
  //       childItems: [
  //         { extensionCategory: 'Cat Accessories, Grooming & Toys', url: 'https://www.coles.com.au/browse/pet/cat-kitten/cat-accessories-grooming-toys' },
  //         { extensionCategory: 'Cat Flea & Worming', url: 'https://www.coles.com.au/browse/pet/cat-kitten/cat-flea-worming' },
  //         { extensionCategory: 'Cat Litter', url: 'https://www.coles.com.au/browse/pet/cat-kitten/cat-litter' },
  //         { extensionCategory: 'Cat Treats & Milk', url: 'https://www.coles.com.au/browse/pet/cat-kitten/cat-treats-milk' },
  //         { extensionCategory: 'Chilled Cat Food', url: 'https://www.coles.com.au/browse/pet/cat-kitten/chilled-cat-food' },
  //         { extensionCategory: 'Dry Cat Food', url: 'https://www.coles.com.au/browse/pet/cat-kitten/dry-cat-food' },
  //         { extensionCategory: 'Kitten Food, Treats & Milk', url: 'https://www.coles.com.au/browse/pet/cat-kitten/kitten-food-treats-milk' },
  //         { extensionCategory: 'Trays & Cans Cat Food', url: 'https://www.coles.com.au/browse/pet/cat-kitten/trays-cans-cat-food' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Dog & Puppy',
  //       childItems: [
  //         { extensionCategory: 'Dog Accessories, Grooming & Toys', url: 'https://www.coles.com.au/browse/pet/dog-puppy/dog-accessories-grooming-toys' },
  //         { extensionCategory: 'Dog Flea & Worming', url: 'https://www.coles.com.au/browse/pet/dog-puppy/dog-flea-worming' },
  //         { extensionCategory: 'Dog Treats & Milk', url: 'https://www.coles.com.au/browse/pet/dog-puppy/dog-treats-milk' },
  //         { extensionCategory: 'Dry Dog Food', url: 'https://www.coles.com.au/browse/pet/dog-puppy/dry-dog-food' },
  //         { extensionCategory: 'Puppy Food, Treats & Milk', url: 'https://www.coles.com.au/browse/pet/dog-puppy/puppy-food-treats-milk' },
  //         { extensionCategory: 'Trays & Cans Dog Food', url: 'https://www.coles.com.au/browse/pet/dog-puppy/trays-cans-dog-food' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Fish Food & Accessories',
  //       childItems: [
  //         { extensionCategory: 'Fish Food', url: 'https://www.coles.com.au/browse/pet/fish-food-accessories/fish-food' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Pet Scoop & Weigh',
  //       childItems: [
  //         { extensionCategory: 'Scoop & Weigh Treats', url: 'https://www.coles.com.au/browse/pet/pet-scoop-weigh/scoop-weigh-treats' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Small Pets',
  //       childItems: [
  //         { extensionCategory: 'Small Pets Food', url: 'https://www.coles.com.au/browse/pet/small-pets/small-pets-food' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Poultry, Meat & Seafood',
  //   subCategories: [
  //     {
  //       subCategory: 'Bbq, Sausages & Burgers',
  //       childItems: [
  //         { extensionCategory: 'Burgers & Rissoles', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/burgers-rissoles' },
  //         { extensionCategory: 'Kebabs', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/kebabs' },
  //         { extensionCategory: 'Meatballs', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/meatballs' },
  //         { extensionCategory: 'Sausage Mince', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/sausage-mince' },
  //         { extensionCategory: 'Sausages', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/sausages' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Beef & Veal',
  //       childItems: [
  //         { extensionCategory: 'Beef & Veal Mince', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/beef-veal-mince' },
  //         { extensionCategory: 'Beef Bones & Offal', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/beef-bones-offal' },
  //         { extensionCategory: 'Beef Roasts', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/beef-roasts' },
  //         { extensionCategory: 'Beef Steaks', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/beef-steaks' },
  //         { extensionCategory: 'Crumbed Beef', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/crumbed-beef' },
  //         { extensionCategory: 'Graze Beef', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/graze-beef' },
  //         { extensionCategory: 'Slow Cook & Casserole Beef', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/slow-cook-casserole-beef' },
  //         { extensionCategory: 'Stir Fry & Diced Beef', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/stir-fry-diced-beef' },
  //         { extensionCategory: 'Veal', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/veal' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Coles Made Easy Range',
  //       childItems: [
  //         { extensionCategory: 'Easy Meals', url: 'https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range/easy-meals' },
  //         { extensionCategory: 'Grill', url: 'https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range/grill' },
  //         { extensionCategory: 'Pastry', url: 'https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range/pastry' },
  //         { extensionCategory: 'Slow Cook', url: 'https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range/slow-cook' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Game',
  //       childItems: [
  //         { extensionCategory: 'Kangaroo', url: 'https://www.coles.com.au/browse/meat-seafood/game/kangaroo' },
  //         { extensionCategory: 'Other Game', url: 'https://www.coles.com.au/browse/meat-seafood/game/other-game' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Ham',
  //       childItems: [
  //         { extensionCategory: 'Ham Portions', url: 'https://www.coles.com.au/browse/meat-seafood/ham/ham-portions' },
  //         { extensionCategory: 'Ham Shoulder & Steaks', url: 'https://www.coles.com.au/browse/meat-seafood/ham/ham-shoulder-steaks' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Lamb',
  //       childItems: [
  //         { extensionCategory: 'Diced Lamb', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/diced-lamb' },
  //         { extensionCategory: 'Graze Grass-Fed Lamb', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/graze-grass-fed-lamb' },
  //         { extensionCategory: 'Lamb Chops', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-chops' },
  //         { extensionCategory: 'Lamb Cutlets', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-cutlets' },
  //         { extensionCategory: 'Lamb Offal', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-offal' },
  //         { extensionCategory: 'Lamb Roasts', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-roasts' },
  //         { extensionCategory: 'Lamb Shanks', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-shanks' },
  //         { extensionCategory: 'Lamb Steak', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-steak' },
  //       ],
  //     },
  //     {
  //       subCategory: 'Mince',
  //       childItems: [
  //         { extensionCategory: 'Beef & Veal Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/beef-veal-mince' },
  //         { extensionCategory: 'Chicken & Turkey Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/chicken-turkey-mince' },
  //         { extensionCategory: 'Kangaroo & Wallaby Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/kangaroo-wallaby-mince' },
  //         { extensionCategory: 'Lamb Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/lamb-mince' },
  //         { extensionCategory: 'Pork Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/pork-mince' },
  //         { extensionCategory: 'Sausage Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/sausage-mince' },
  //       ],
  //     },
  //     // {
  //     //   subCategory: 'Organic Meat',
  //     //   childItems: [
  //     //     { extensionCategory: 'Organic Beef', url: 'https://www.coles.com.au/browse/meat-seafood/organic-meat/organic-beef' },
  //     //     { extensionCategory: 'Organic Lamb', url: 'https://www.coles.com.au/browse/meat-seafood/organic-meat/organic-lamb' },
  //     //     { extensionCategory: 'Organic Poultry', url: 'https://www.coles.com.au/browse/meat-seafood/organic-meat/organic-poultry' },
  //     //     { extensionCategory: 'Organic Sausages & Meatballs', url: 'https://www.coles.com.au/browse/meat-seafood/organic-meat/organic-sausages-meatballs' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Pork',
  //     //   childItems: [
  //     //     { extensionCategory: 'Free Range Pork', url: 'https://www.coles.com.au/browse/meat-seafood/pork/free-range-pork' },
  //     //     { extensionCategory: 'Pork Chops', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-chops' },
  //     //     { extensionCategory: 'Pork Marinade', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-marinade' },
  //     //     { extensionCategory: 'Pork Mince', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-mince' },
  //     //     { extensionCategory: 'Pork Ribs', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-ribs' },
  //     //     { extensionCategory: 'Pork Roasts', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-roasts' },
  //     //     { extensionCategory: 'Pork Steaks', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-steaks' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Poultry',
  //     //   childItems: [
  //     //     { extensionCategory: 'Breast Fillets', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/breast-fillets' },
  //     //     { extensionCategory: 'Chicken Offal', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/chicken-offal' },
  //     //     { extensionCategory: 'Chicken Wings', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/chicken-wings' },
  //     //     { extensionCategory: 'Crumbed Chicken', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/crumbed-chicken' },
  //     //     { extensionCategory: 'Diced, Stir-Fry & Tenders', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/diced-stir-fry-tenders' },
  //     //     { extensionCategory: 'Drumsticks & Maryland', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/drumsticks-maryland' },
  //     //     { extensionCategory: 'Duck', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/duck' },
  //     //     { extensionCategory: 'Free Range Chicken', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/free-range-chicken' },
  //     //     { extensionCategory: 'Kebabs & Bites', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/kebabs-bites' },
  //     //     { extensionCategory: 'Marinated & Roast Chicken', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/marinated-roast-chicken' },
  //     //     { extensionCategory: 'Poultry Deli', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/poultry-deli' },
  //     //     { extensionCategory: 'Thigh Fillets', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/thigh-fillets' },
  //     //     { extensionCategory: 'Turkey', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/turkey' },
  //     //     { extensionCategory: 'Whole Chicken', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/whole-chicken' },
  //     //   ],
  //     // },
  //     // {
  //     //   subCategory: 'Seafood',
  //     //   childItems: [
  //     //     { extensionCategory: 'Deli Fish', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/deli-fish' },
  //     //     { extensionCategory: 'Deli Marinara Mix and Other Seafood', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/deli-marinara-mix-and-other-seafood' },
  //     //     { extensionCategory: 'Deli Prawns', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/deli-prawns' },
  //     //     { extensionCategory: 'Prepacked Seafood', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/prepacked-seafood' },
  //     //     { extensionCategory: 'Smoked and Cured Fish', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/smoked-and-cured-fish' },
  //     //   ],
  //     // },
  //   ],
  // },
  // {
  //   category: 'Back to School',
  //   subCategories: [
  //     {
  //       subCategory: 'BBQ Meat & Seafood',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/back-to-school/easy-school-night-dinners' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/back-to-school/school-breakfast' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/back-to-school/school-lunches-snacking' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/back-to-school/school-stationery-accessories' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Liquor',
  //   subCategories: [
  //     {
  //       subCategory: 'BBQ Meat & Seafood',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/liquor/beer' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/liquor/cask-fortified-wine' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/liquor/champagne-sparkling' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/liquor/cider' },
  //         { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/liquor/low-mid-strength' },
  //         { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/liquor/premixed-drinks' },
  //         { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/liquor/red-wine' },
  //         { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/liquor/rose' },
  //         { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/liquor/spirits' },
  //         { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/liquor/white-wine' },
  //       ],
  //     },
  //   ],
  // },
];

export default categories;
