// IIFE immediately invoked function expression
// naudojama siekiant apriboti scope
(() => {
  // Data structure for book inventory
  const inventory = [
    {
      category: 'Informacinės technologijos',
      books: [
        {
          title: 'Programavimas linksmai',
          ISBN: 'IT-12345',
          publishing_year: 2019,
          pages: 250,
          quantity: 12,
          price: 25,
        },
        {
          title: 'Programavimas rimtai',
          ISBN: 'IT-12346',
          publishing_year: 2020,
          pages: 300,
          quantity: 10,
          price: 20,
        },
        {
          title: 'Programavimas sausai',
          ISBN: 'IT-12347',
          publishing_year: 2021,
          pages: 200,
          quantity: 20,
          price: 18,
        },
        {
          title: 'Programavimas intensyviai',
          ISBN: 'IT-12348',
          publishing_year: 2022,
          pages: 400,
          quantity: 8,
          price: 30,
        },
        {
          title: 'IT pagrindai',
          ISBN: 'IT-12349',
          publishing_year: 2023,
          pages: 200,
          quantity: 15,
          price: 24,
        },
      ],
    },
    {
      category: 'Grožinė literatūra',
      books: [
        {
          title: 'Le petit prince',
          ISBN: '9786090159224',
          publishing_year: 2024,
          pages: 104,
          quantity: 40,
          price: 9.99,
        },
        {
          title: 'The Alchemist',
          ISBN: '9780722532935',
          publishing_year: 2022,
          pages: 161,
          quantity: 20,
          price: 14.59,
        },
        {
          title: 'A Court of Thorns and Roses',
          ISBN: '9786090152645',
          publishing_year: 2022,
          pages: 448,
          quantity: 80,
          price: 17.49,
        },
        {
          title: 'A Court of Mist and Fury',
          ISBN: '9786090152669',
          publishing_year: 2022,
          pages: 624,
          quantity: 57,
          price: 20.23,
        },
        {
          title: 'Altorių šešėly',
          ISBN: '9786094796500',
          publishing_year: 2021,
          pages: 716,
          quantity: 39,
          price: 5.79,
        },
      ],
    },
    {
      category: 'Biografija',
      books: [
        {
          title: 'The Gods We Can Touch',
          ISBN: '9780571543106',
          publishing_year: 2023,
          pages: 168,
          quantity: 1,
          price: 25,
        },
        {
          title: 'What Happened to the Heart?',
          ISBN: '9780571543250',
          publishing_year: 2024,
          pages: 160,
          quantity: 1,
          price: 25,
        },
        {
          title: 'Metai. Gamtos fotografo dienoraštis',
          ISBN: '9786090159019',
          publishing_year: 2024,
          pages: 256,
          quantity: 29,
          price: 25.39,
        },
        {
          title: 'Steve Jobs',
          ISBN: '9786094874277',
          publishing_year: 2024,
          pages: 624,
          quantity: 24,
          price: 35.99,
        },
        {
          title: 'Blogis yra laikinas',
          ISBN: '9786094668029',
          publishing_year: 2024,
          pages: 448,
          quantity: 30,
          price: 22.89,
        },
      ],
    },
    {
      category: 'Populiarioji psichologija',
      books: [
        {
          title: 'Atomic Habits',
          ISBN: '9786098254037',
          publishing_year: 2019,
          pages: 320,
          quantity: 40,
          price: 14.79,
        },
        {
          title: 'Who Moved My Cheese?',
          ISBN: '9780091883768',
          publishing_year: 2002,
          pages: 94,
          quantity: 7,
          price: 19.09,
        },
        {
          title: 'Nonviolent Communication',
          ISBN: '9786098054125',
          publishing_year: 2024,
          pages: 304,
          quantity: 73,
          price: 18.89,
        },
        {
          title: 'The Power of Your Subconscious Mind',
          ISBN: '9786090138229',
          publishing_year: 2022,
          pages: 320,
          quantity: 20,
          price: 13.29,
        },
        {
          title: 'Feeling Good: The New Mood Therapy',
          ISBN: '9786094380051',
          publishing_year: 2019,
          pages: 384,
          quantity: 31,
          price: 13.79,
        },
      ],
    },
    {
      category: 'Verslas',
      books: [
        {
          title: 'The Goal',
          ISBN: '9780884271956',
          publishing_year: 2000,
          pages: 366,
          quantity: 0,
          price: 31.89,
        },
        {
          title: 'The Goal II',
          ISBN: '9789985787519',
          publishing_year: 2002,
          pages: 261,
          quantity: 1,
          price: 12,
        },
        {
          title: `It's Not Luck`,
          ISBN: '9786094370953',
          publishing_year: 2011,
          pages: 223,
          quantity: 1,
          price: 9.39,
        },
        {
          title: 'Critical Chain',
          ISBN: '9780566080388',
          publishing_year: 2000,
          pages: 398,
          quantity: 0,
          price: 25,
        },
        {
          title: 'Maverick',
          ISBN: '9789949100064',
          publishing_year: 2003,
          pages: 372,
          quantity: 1,
          price: 4.59,
        },
      ],
    },
    {
      category: 'Istorija',
      books: [
        {
          title: 'Nexus',
          ISBN: '9786094276378',
          publishing_year: 2024,
          pages: 460,
          quantity: 62,
          price: 25.29,
        },
        {
          title: 'Sibiro haiku',
          ISBN: '9786098120493',
          publishing_year: 2020,
          pages: 240,
          quantity: 43,
          price: 19.49,
        },
        {
          title: 'Lietuvos Istorija XXL',
          ISBN: '9786094841019',
          publishing_year: 2023,
          pages: 752,
          quantity: 20,
          price: 57.99,
        },
        {
          title: 'Trečiojo Reicho triumfas',
          ISBN: '9786099606347',
          publishing_year: 2024,
          pages: 680,
          quantity: 33,
          price: 33.29,
        },
        {
          title: 'Live. Fight. Survive.',
          ISBN: '9789916995051',
          publishing_year: 2024,
          pages: 296,
          quantity: 28,
          price: 19.49,
        },
      ],
    },
  ];

  function formatMoney(num) {
    return num.toFixed(2) + ' EUR';
  }

  const yearThreshold = 2024;

  // object can be const with mutable properties
  const categoryTotals = {};

  for (const catObj of inventory) {
    let categoryTotal = 0;
    console.log(`${catObj.category} --------`);
    for (const bookObj of catObj.books) {
      // Kaip čia reikėjo? Ar iteruoti for(prop in bookObj) ir tikrinti if(prop === 'publishing_year') ir pan.?
      let inv = bookObj.price * bookObj.quantity;
      console.log(bookObj.title);
      console.log(
        bookObj.publishing_year +
          (bookObj.publishing_year >= yearThreshold ? ' New book' : '')
      );
      console.log(formatMoney(bookObj.price));
      console.log('Quantity: ' + bookObj.quantity);
      console.log('Total: ' + formatMoney(inv));
      categoryTotal += inv;
    }
    categoryTotals[catObj.category] = categoryTotal;
  }

  let invTotal = 0;
  console.log('--------');
  for (const category in categoryTotals) {
    invTotal += categoryTotals[category];
    console.log(`${category}: ${formatMoney(categoryTotals[category])}`);
  }

  console.log(`Total inventory: ${formatMoney(invTotal)}`);
})();
