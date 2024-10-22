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
          pages: 240,
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
          pages: 240,
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

  /*
  Extra tasks:
  Write function for filter books by category, title, pages
  Write function for min and max price
  Wirte function for sort books by author,price, title
*/

  /**
   * Works similarly to typeof operator, analyses first elements of data to assume which form of book list it is in
   * @param {*} arr either a plain flat array of books, or an array with category groups with books in each of them
   * @return {string|undefined} 'books', 'groups' or undefined
   */
  function guesstimateDataFormat(arr) {
    if (Array.isArray(arr)) {
      if (
        Object.keys(arr[0]).includes('books') &&
        Array.isArray(arr[0]['books'])
      )
        return 'groups';
      if (Object.keys(arr[0]).includes('ISBN')) return 'books';
      return undefined;
    }
    return undefined;
  }

  /**
   * Converts books grouped by category into array of books
   * @param {*} arr array of groups each having category and array of books
   * @return {*} flattened array of books without category
   */
  function getAllBooks(arr) {
    return [].concat(...arr.map((cat) => cat.books));
  }

  /**
   * Filters a simple array of books by a specified property using strict equality
   * @param {*} books an array of "book" objects
   * @param {string} prop property name to filter by
   * @param {*} val exact value for filtering (must be strictly equal)
   * @return {*} an array of "book" objects, same format as input
   */
  function filterBooksArray(books, prop, val) {
    return books.filter((bookObj) => bookObj[prop] === val);
  }

  /**
   *
   * Filters books within an array of category groups
   * @param {*} arr array of category groups, each having an array of books
   * @param {string} prop property name to filter by
   * @param {*} val exact value for filtering (must be strictly equal in most cases)
   * @return {*} same format as input with filtered books
   */
  function filterCategorisedBooks(arr, prop, val) {
    switch (prop.toLowerCase()) {
      case 'category':
        return arr.filter(
          (cat) => cat.category.toLowerCase() === val.toLowerCase()
        );
        break;
      default: {
        return arr
          .map((cat) => ({
            category: cat.category,
            books: filterBooksArray(cat.books, prop, val),
          }))
          .filter((cat) => cat.books.length > 0);
      }
    }
  }

  /**
   * Takes a plain list of prices from book list
   * @param {*} arr either a plain flat array of books, or an array with category groups with books in each of them
   * @return {number[]} all prices without context
   */
  function getAllPrices(arr) {
    switch (guesstimateDataFormat(arr)) {
      case 'groups':
        return getAllBooks(arr).map((bookObj) => bookObj.price);
        break;
      case 'books':
        return arr.map((bookObj) => bookObj.price);
        break;
    }
  }

  function getMinPrice(arr) {
    return Math.min(...getAllPrices(arr));
  }

  function getMaxPrice(arr) {
    return Math.max(...getAllPrices(arr));
  }

  /**
   * sorts an array of books by a primitive property
   * @param {*} books an array of "book" objects
   * @param {string} prop a property name (works with primitive values)
   * @param {number} dir must be 1 or -1
   * @return {*} a new array (toSorted())
   */
  function getSortedBookArray(books, prop, dir) {
    return books.toSorted((book1, book2) => {
      return book1[prop] > book2[prop]
        ? dir
        : book1[prop] < book2[prop]
        ? dir * -1
        : 0;
    });
  }

  /**
   * sorts books within their categories
   * @param {*} arr array of category groups, each having an array of books
   * @param {string} prop a property name (works with primitive values)
   * @param {string|number} direction can be 'asc', 'desc', 1, -1; defaults to ascending sort
   * @return {*} a new array, maintaining structural data format (toSorted())
   */
  function getSortedBooksInCategories(arr, prop, direction) {
    let dir = 1;
    switch (direction) {
      case 'desc':
      case 'Desc':
      case -1:
        dir = -1;
        break;
      case 'asc':
      case 'Asc':
      case 1:
        dir = 1;
        break;
    }
    return arr.map((cat) => ({
      category: cat.category,
      books: getSortedBookArray(cat.books, prop, dir),
    }));
  }

  function formatMoney(num) {
    return num.toFixed(2) + ' \u{20AC}';
  }

  function printBookInfo(bookObj, yearThreshold) {
    let inv = bookObj.price * bookObj.quantity;
    console.log(
      `${bookObj.title} (${bookObj.publishing_year}${
        bookObj.publishing_year >= yearThreshold ? ' New book' : ''
      }) ${bookObj.pages} pages`
    );
    console.log(
      `${formatMoney(bookObj.price).padStart(8)}  x${bookObj.quantity
        .toString()
        .padStart(3)} = ${formatMoney(inv).padStart(9)}`
    );
  }

  const YEAR_THRESHOLD = 2024;

  function printInventoryReport(inv, includeSummary) {
    // object can be const with mutable properties
    const categoryTotals = {};

    for (const catObj of inv) {
      let categoryTotal = 0;
      console.log(`----{ ${catObj.category} }--------`);
      for (const bookObj of catObj.books) {
        printBookInfo(bookObj, YEAR_THRESHOLD);
        categoryTotal += bookObj.price * bookObj.quantity;
      }
      categoryTotals[catObj.category] = categoryTotal;
    }
    console.log('------------');
    if (includeSummary) {
      let invTotal = 0;
      for (const category in categoryTotals) {
        invTotal += categoryTotals[category];
        console.log(`${category}: ${formatMoney(categoryTotals[category])}`);
      }
      console.log(`Total inventory: ${formatMoney(invTotal)}`);
    }
  }

  printInventoryReport(inventory);

  console.log('--------');

  console.log('>>>>{ filter by category }----');
  printInventoryReport(
    filterCategorisedBooks(inventory, 'category', 'informacinės technologijos')
  );
  console.log('>>>>{ filter by title }----');
  printInventoryReport(
    filterCategorisedBooks(inventory, 'title', 'Programavimas linksmai')
  );
  console.log('>>>>{ filter by pages }----');
  printInventoryReport(filterCategorisedBooks(inventory, 'pages', 240));

  console.log('>>>> cheapest book: ' + formatMoney(getMinPrice(inventory)));
  console.log(
    '>>>> most expensive book: ' + formatMoney(getMaxPrice(inventory))
  );
  console.log(
    '>>>> most expensive book in category: ' +
      formatMoney(
        getMaxPrice(
          filterCategorisedBooks(
            inventory,
            'category',
            'informacinės technologijos'
          )
        )
      )
  );

  console.log('>>>>{ sort by price asc }----');
  printInventoryReport(
    getSortedBooksInCategories(inventory, 'price', 'asc'),
    false
  );
  console.log('>>>>{ sort by price desc }----');
  printInventoryReport(
    getSortedBooksInCategories(inventory, 'price', 'desc'),
    false
  );
  console.log('>>>>{ sort by title }----');
  printInventoryReport(getSortedBooksInCategories(inventory, 'title'), false);
})();
