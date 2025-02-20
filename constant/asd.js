const categories = [
    {
      category: 'Baby',
      subCategories: [
        {
          subCategory: 'a',
          childItems: [
            { extensionCategory: 'a', url: '' },
            { extensionCategory: 'b', url: '' },
            { extensionCategory: 'c', url: '' },
            { extensionCategory: 'd', url: '' },
            { extensionCategory: 'e', url: '' },
            { extensionCategory: 'f', url: '' },
            { extensionCategory: 'g', url: '' },
          ],
        },
        {
          subCategory: 'b',
          childItems: [
            { extensionCategory: 'a', url: '' },
            { extensionCategory: 'b', url: '' },
            { extensionCategory: 'c', url: '' },
            { extensionCategory: 'd', url: '' },
            { extensionCategory: 'e', url: '' },
            { extensionCategory: 'f', url: '' },
          ],
        },
        {
          subCategory: 'c',
          childItems: [
            { extensionCategory: 'a', url: '' },
            { extensionCategory: 'b', url: '' },
            { extensionCategory: 'c', url: '' },
            { extensionCategory: 'd', url: '' },
            { extensionCategory: 'e', url: '' },
          ],
        },
        {
          subCategory: 'd',
          childItems: [
            { extensionCategory: 'a', url: '' },
          ],
        },
        {
          subCategory: 'e',
          childItems: [
            { extensionCategory: 'a', url: '' },
            { extensionCategory: 'b', url: '' },
            { extensionCategory: 'c', url: '' },
          ],
        },
        {
          subCategory: 'f',
          childItems: [
            { extensionCategory: 'a', url: '' },
            { extensionCategory: 'b', url: '' },
            { extensionCategory: 'c', url: '' },
            { extensionCategory: 'd', url: '' },
            { extensionCategory: 'e', url: '' },
            { extensionCategory: 'f', url: '' },
          ],
        },
        {
          subCategory: 'g',
          childItems: [
            { extensionCategory: 'a', url: '' },
          ],
        },
        {
            subCategory: 'h',
            childItems: [
              { extensionCategory: 'a', url: '' },
              { extensionCategory: 'b', url: '' },
              { extensionCategory: 'c', url: '' },
              { extensionCategory: 'd', url: '' },
              { extensionCategory: 'e', url: '' },
              { extensionCategory: 'f', url: '' },
            ],
        },
        {
          subCategory: 'i',
          childItems: [
            { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-bath' },
            { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-cotton-buds' },
            { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-hair-body-wash'},
            { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-hair-care'},
            { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-medicinal'},
            { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-moisturiser'},
            { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-oil'},
            { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/baby/bath-skincare/baby-powder'},
          ],
        },
        {
          subCategory: '',
          childItems: [
            { extensionCategory: '' },
          ],
        },
      ],
    },
    {
      category: 'Bakery',
      subCategories: [
        {
          subCategory: 'In-Store Bakery',
          childItems: [
            { extensionCategory: 'a' },
            { extensionCategory: 'b' },
            { extensionCategory: 'c' },
            { extensionCategory: 'd' },
            { extensionCategory: 'e' },
            { extensionCategory: 'f' },
            { extensionCategory: 'g' },
            { extensionCategory: 'h' },
            { extensionCategory: 'i' },
            { extensionCategory: 'j' },
            { extensionCategory: 'k' }, // 11
          ],
        },
      ],
    },
    {
      category: 'Dairy, Eggs & Fridge',
      subCategories: [
        {
          subCategory: 'Cheese',
          childItems: [
            // { extensionCategory: 'a' },
            // { extensionCategory: 'b' },
            // { extensionCategory: 'c' },
            // { extensionCategory: 'd' },
            // { extensionCategory: 'e' },
            // { extensionCategory: 'f' },
            // { extensionCategory: 'g' },
            { extensionCategory: 'h' },
            { extensionCategory: 'i' },
            { extensionCategory: 'j' },
            { extensionCategory: 'k' },
            { extensionCategory: 'l' },
            { extensionCategory: 'm' },
            { extensionCategory: 'n' },
            { extensionCategory: 'o' },
          ],
        },
      ],
    },
    {
      category: 'Deli & Chilled Meats',
      subCategories: [
        {
          subCategory: 'Deli Meats',
          childItems: [
            { extensionCategory: 'a' },
            { extensionCategory: 'b' },
            { extensionCategory: 'c' },
            { extensionCategory: 'd' },
            { extensionCategory: 'e' },
            { extensionCategory: 'f' },
            { extensionCategory: 'g' },
            { extensionCategory: 'h' },
          ],
        },
      ],
    },
    {
      category: 'Drinks',
      subCategories: [
        {
          subCategory: 'Chilled Drinks',
          childItems: [
            // { extensionCategory: 'a' },
            // { extensionCategory: 'b' },
            // { extensionCategory: 'c' },
            // { extensionCategory: 'd' },
            // { extensionCategory: 'e' },
            // { extensionCategory: 'f' },
            // { extensionCategory: 'g' },
            // { extensionCategory: 'h' },
            // { extensionCategory: 'i' },
            { extensionCategory: 'j' },
            { extensionCategory: 'k' },
            { extensionCategory: 'l' },
            { extensionCategory: 'm' },
          ],
        },
      ],
    },
    {
      category: 'Freezer',
      subCategories: [
        {
          subCategory: 'Chips & Wedges',
          childItems: [
            { extensionCategory: 'a' },
            { extensionCategory: 'b' },
            { extensionCategory: 'c' },
            { extensionCategory: 'd' },
            { extensionCategory: 'e' },
            { extensionCategory: 'f' },
            { extensionCategory: 'g' },
            { extensionCategory: 'h' },
            { extensionCategory: 'i' },
            { extensionCategory: 'j' },
            { extensionCategory: 'k' },
            { extensionCategory: 'l' },
            { extensionCategory: 'm' },
            { extensionCategory: 'n' }, // 14
          ],
        },
      ],
    },
    {
      category: 'Fruit & Veg',
      subCategories: [
        {
          subCategory: 'Organic',
          childItems: [
            { extensionCategory: 'a' },
            { extensionCategory: 'b' },
            { extensionCategory: 'c' },
            { extensionCategory: 'd' },
            { extensionCategory: 'e' },
            { extensionCategory: 'f' },
            { extensionCategory: 'g' },
            { extensionCategory: 'h' }, // 8
          ],
        },
      ],
    },
    // {
    //   category: 'Health & Beauty',
    //   subCategories: [
    //     {
    //       subCategory: 'Cosmetics',
    //       childItems: [
    //         // { extensionCategory: 'a' },
    //         // { extensionCategory: 'b' },
    //         // { extensionCategory: 'c' },
    //         // { extensionCategory: 'd' },
    //         // { extensionCategory: 'e' },
    //         // { extensionCategory: 'f' },
    //         // { extensionCategory: 'g' },
    //         // { extensionCategory: 'h' },
    //         // { extensionCategory: 'i' },
    //         { extensionCategory: 'j' },
    //         { extensionCategory: 'k' },
    //         { extensionCategory: 'l' },
    //         { extensionCategory: 'm' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   category: 'Household',
    //   subCategories: [
    //     {
    //       subCategory: 'Homewares',
    //       childItems: [
    //         { extensionCategory: 'a' },
    //         { extensionCategory: 'b' },
    //         { extensionCategory: 'c' },
    //         { extensionCategory: 'd' },
    //         { extensionCategory: 'e' },
    //         { extensionCategory: 'f' },
    //         { extensionCategory: 'g' },
    //         { extensionCategory: 'h' },
    //         { extensionCategory: 'i' },
    //         { extensionCategory: 'j' },
    //         { extensionCategory: 'k' },
    //         { extensionCategory: 'l' },
    //         { extensionCategory: 'm' },
    //         { extensionCategory: 'n' },
    //         { extensionCategory: 'o' },
    //         { extensionCategory: 'p' },
    //         { extensionCategory: 'q' },
    //         { extensionCategory: 'r' },
    //         { extensionCategory: 's' },
    //         { extensionCategory: 't' },
    //         { extensionCategory: 'u' },
    //         { extensionCategory: 'v' },
    //         { extensionCategory: 'w' }, // 23
    //       ],
    //     },
    //   ],
    // },
    // {
    //   category: 'Pantry',
    //   subCategories: [
    //     {
    //       subCategory: 'Baking',
    //       childItems: [
    //         // { extensionCategory: 'a' },
    //         // { extensionCategory: 'b' },
    //         // { extensionCategory: 'c' },
    //         // { extensionCategory: 'd' },
    //         // { extensionCategory: 'f' },
    //         // { extensionCategory: 'g' },
    //         // { extensionCategory: 'h' },
    //         // { extensionCategory: 'i' },
    //         // { extensionCategory: 'j' },
    //         // { extensionCategory: 'k' },
    //         // { extensionCategory: 'l' },
    //         // { extensionCategory: 'm' },
    //         // { extensionCategory: 'n' },
    //         // { extensionCategory: 'o' },
    //         // { extensionCategory: 'p' },
    //         // { extensionCategory: 'q' },
    //         // { extensionCategory: 'r' },
    //         // { extensionCategory: 's' }, // remove
    //         // confectionery
    //         { extensionCategory: 'e' },
    //         { extensionCategory: 't' },
    //         { extensionCategory: 'u' },
    //         { extensionCategory: 'v' },
    //         { extensionCategory: 'w' },
    //         { extensionCategory: 'x' },
    //         { extensionCategory: 'y' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   category: 'Pet',
    //   subCategories: [
    //     {
    //       subCategory: 'Birds',
    //       childItems: [
    //         { extensionCategory: 'a' },
    //         { extensionCategory: 'b' },
    //         { extensionCategory: 'c' },
    //         { extensionCategory: 'd' },
    //         { extensionCategory: 'e' },
    //         { extensionCategory: 'f' }, // 6
    //       ],
    //     },
    //   ],
    // },
    // {
    //   category: 'Poultry, Meat & Seafood',
    //   subCategories: [
    //     {
    //       subCategory: 'BBQ Meat & Seafood',
    //       childItems: [
    //         { extensionCategory: 'a' },
    //         { extensionCategory: 'b' },
    //         { extensionCategory: 'c' },
    //         { extensionCategory: 'd' },
    //         { extensionCategory: 'e' },
    //         { extensionCategory: 'f' },
    //         { extensionCategory: 'g' },
    //         { extensionCategory: 'h' },
    //         { extensionCategory: 'i' },
    //         { extensionCategory: 'j' },
    //         { extensionCategory: 'k' }, // 11
    //       ],
    //     },
    //   ],
    // },
    // {
    //   category: 'Back to School',
    //   subCategories: [
    //     {
    //       subCategory: 'BBQ Meat & Seafood',
    //       childItems: [
    //         { extensionCategory: 'a' },
    //         { extensionCategory: 'b' },
    //         { extensionCategory: 'c' },
    //         { extensionCategory: 'd' },
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
    //         { extensionCategory: 'a' },
    //         { extensionCategory: 'b' },
    //         { extensionCategory: 'c' },
    //         { extensionCategory: 'd' },
    //         { extensionCategory: 'e' },
    //         { extensionCategory: 'f' },
    //         { extensionCategory: 'g' },
    //         { extensionCategory: 'h' },
    //         { extensionCategory: 'i' },
    //         { extensionCategory: 'j' },
    //       ],
    //     },
    //   ],
    // },
  ];
  
  export default categories;
  