const today = new Date();
const YEAR_THRESHOLD = today.getFullYear() - (today.getMonth() > 5 ? 1 : 2);

function isNew(year) {
  return year >= YEAR_THRESHOLD;
}

function getCategories(arr) {
  return arr.map((catObj) => catObj.category);
}

/**
 * Works similarly to typeof operator, analyses first elements of data to assume which form of book list it is in
 * @param {*} arr either a plain flat array of books, or an array with category groups with books in each of them
 * @return {string|undefined} 'books', 'groups' or undefined
 */
function guesstimateDataFormat(arr) {
  if (Array.isArray(arr)) {
    if (Object.keys(arr[0]).includes('books') && Array.isArray(arr[0]['books']))
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
 * Converts any known form of data into array of books
 * @param {*} arr either a plain flat array of books, or an array with category groups with books in each of them
 * @return {*} flattened array of books without category
 */
function getAllBooksAdaptive(arr) {
  if (!arr.length) {
    return arr;
  }
  switch (guesstimateDataFormat(arr)) {
    case 'groups':
      return getAllBooks(arr);
      break;
    case 'books':
    default:
      return arr;
      break;
  }
}

/**
 * Constructs a filter function from a filter definition set
 * @param {*} filterObj a key-value collection containing filter definition
 * @return {*} a function that checks a given book object and returns boolean
 */
function getCompoundFilterFn(filterObj) {
  let titleConditionFn = (bookObj) => true;
  let pagesMinConditionFn = (bookObj) => true;
  let pagesMaxConditionFn = (bookObj) => true;
  if (
    'title' in filterObj &&
    typeof filterObj.title === 'string' &&
    filterObj.title.length > 0
  ) {
    const val = filterObj.title.toLowerCase();
    titleConditionFn = (bookObj) => bookObj.title.toLowerCase().includes(val);
  }
  if (
    'pagesMin' in filterObj &&
    typeof filterObj.pagesMin === 'number' &&
    filterObj.pagesMin > 0
  ) {
    pagesMinConditionFn = (bookObj) => bookObj.pages >= filterObj.pagesMin;
  }
  if (
    'pagesMax' in filterObj &&
    typeof filterObj.pagesMax === 'number' &&
    filterObj.pagesMax > 0
  ) {
    pagesMaxConditionFn = (bookObj) => bookObj.pages <= filterObj.pagesMax;
  }
  return (bookObj) =>
    titleConditionFn(bookObj) &&
    pagesMinConditionFn(bookObj) &&
    pagesMaxConditionFn(bookObj);
}

/**
 * Filters books within an array of category groups
 * @param {*} arr array of category groups, each having an array of books
 * @param {*} filterObj a key-value collection containing filter definition
 * @return {*} same format as input with filtered books
 */
function filterCategorisedBooks(arr, filterObj) {
  if (!filterObj || Object.keys(filterObj).length === 0) return arr;
  const hasCategoryFilter =
    'category' in filterObj &&
    typeof filterObj.category === 'string' &&
    filterObj.category.length > 0;
  const hasOtherFilters =
    Object.keys(filterObj).length >= 1 + Number(hasCategoryFilter);
  if (hasCategoryFilter && !hasOtherFilters) {
    return arr.filter(
      (catObj) =>
        catObj.category.toLowerCase() === filterObj.category.toLowerCase()
    );
  }
  const filterFn = hasOtherFilters
    ? getCompoundFilterFn(filterObj)
    : (bookObj) => true;

  const filteredInv = [];
  arr.forEach((catObj) => {
    if (
      !hasCategoryFilter ||
      catObj.category.toLowerCase() === filterObj.category.toLowerCase()
    ) {
      const filteredBooksArray = catObj.books.filter(filterFn);
      if (filteredBooksArray.length > 0) {
        filteredInv.push({
          category: catObj.category,
          books: filteredBooksArray,
        });
      }
    }
  });
  return filteredInv;
}

/**
 * Takes a plain list of prices from book list
 * @param {*} arr either a plain flat array of books, or an array with category groups with books in each of them
 * @return {number[]} all prices without context
 */
function getAllPrices(arr) {
  return getAllBooksAdaptive(arr).map((bookObj) => bookObj.price);
}

function getMinPrice(arr) {
  return Math.min(...getAllPrices(arr));
}

function getMaxPrice(arr) {
  return Math.max(...getAllPrices(arr));
}

function getTopBooksByPrice(arr, minmax) {
  // could have usesd something like reduce(), but this already works with possible multiple results
  const booksArray = getAllBooksAdaptive(arr);

  let targetPrice = NaN;
  switch (minmax) {
    case 'min':
      targetPrice = getMinPrice(booksArray);
      break;
    case 'max':
      targetPrice = getMaxPrice(booksArray);
      break;
    default:
      return [];
  }
  return booksArray.filter((bookObj) => bookObj.price === targetPrice);
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

function getInventoryReport(inv) {
  const categoryTotals = {};
  let invTotal = 0;

  for (const catObj of inv) {
    let categoryTotal = 0;
    for (const bookObj of catObj.books) {
      categoryTotal += bookObj.price * bookObj.quantity;
    }
    categoryTotals[catObj.category] = categoryTotal;
    invTotal += categoryTotal;
  }
  return {
    categoryTotals: categoryTotals,
    total: invTotal,
  };
}
