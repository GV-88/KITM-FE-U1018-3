/**
 * writes data to a global working object and renders display
 * @param {*} inv new working value to set
 */
function updateBookList(inv) {
  window.workingInventory = inv;
  renderBookList(window.workingInventory, document.querySelector('#book-list'));
}

const categories = getCategories(inventory);

document.addEventListener('DOMContentLoaded', (e) => {
  //query known static DOM elements once so we don't have to do it again
  const filterFormElement = document.querySelector('.filter');
  const inputCategoryElement = document.querySelector('#input-filter-category');
  const inputPagesMinElement = document.querySelector(
    '#input-filter-pages-min'
  );
  const inputPagesMaxElement = document.querySelector(
    '#input-filter-pages-max'
  );
  const summaryElement = document.querySelector('#summary-pannel');
  const summaryTitleElement = summaryElement.querySelector('#summary-title');
  const summaryContentElement =
    summaryElement.querySelector('#summary-content');

  /**
   * puts HTML node(s) content to the summary HTML elements; clears them when called with no parameters
   * @param {string} title
   * @param {*} content node or array of nodes
   */
  function updateSummary(title, content) {
    summaryElement.classList.add('hidden');
    clearChildren(summaryContentElement);
    if (title || content) {
      summaryTitleElement.textContent = title;
      if (content instanceof Array) {
        summaryContentElement.append(...content);
      } else {
        summaryContentElement.append(content);
      }
      summaryElement.classList.remove('hidden');
    }
  }

  function topPriceEventHandler(e) {
    const minmax = e.target.getAttribute('minmax');
    const summaryTitle =
      minmax === 'min'
        ? 'Mažiausia kaina'
        : minmax === 'max'
        ? 'Didžiausia kaina'
        : undefined;

    updateSummary(
      summaryTitle,
      getTopBooksByPrice(window.workingInventory, minmax).map((bookObj) =>
        renderBookCard(bookObj)
      )
    );
  }

  //TODO: learn to work properly with global variables
  window.workingInventory = inventory;

  updateBookList(window.workingInventory);

  //fill select box with categories from data
  inputCategoryElement.appendChild(
    createElementExt('option', [], { value: -1 }, '-')
  );
  categories.forEach((label, key) =>
    inputCategoryElement.appendChild(
      createElementExt('option', [], { value: key }, label)
    )
  );

  //prevent input min > max
  inputPagesMinElement.addEventListener('input', (e) => {
    inputPagesMaxElement.min = e.target.value.length > 0 ? e.target.value : 0;
  });
  inputPagesMaxElement.addEventListener('input', (e) => {
    inputPagesMinElement.max =
      e.target.value.length > 0 ? e.target.value : 3000;
  });

  filterFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    new FormData(filterFormElement); //this constructor fires formdata event
  });

  filterFormElement.addEventListener('formdata', (e) => {
    const data = e.formData;
    const filterObj = {};

    const categoryFilter = categories[data.get('category')];
    if (typeof categoryFilter === 'string' && categoryFilter.length > 0) {
      filterObj.category = categoryFilter;
    }
    const titleFilter = data.get('title');
    if (typeof titleFilter === 'string' && titleFilter.length > 0) {
      filterObj.title = titleFilter;
    }
    const pagesMinFilter = Number(data.get('pagesMin'));
    if (typeof pagesMinFilter === 'number' && pagesMinFilter > 0) {
      filterObj.pagesMin = pagesMinFilter;
    }
    const pagesMaxFilter = Number(data.get('pagesMax'));
    if (typeof pagesMaxFilter === 'number' && pagesMaxFilter > 0) {
      filterObj.pagesMax = pagesMaxFilter;
    }
    let filteredBooks = filterCategorisedBooks(inventory, filterObj);
    const sortParams = data.get('sort').split(' ');
    if (sortParams.length > 1) {
      filteredBooks = getSortedBooksInCategories(
        filteredBooks,
        sortParams[0],
        sortParams[1]
      );
    }
    updateBookList(filteredBooks);
    updateSummary(); //clear summary on any filter update, this is only to prevent user confusion
  });

  summaryElement
    .querySelector('.summary-panel__button--close')
    .addEventListener('click', (e) => summaryElement.classList.add('hidden'));

  document
    .querySelectorAll('#button-min-price, #button-max-price')
    .forEach((el) => el.addEventListener('click', topPriceEventHandler));

  document.querySelector('#button-inventory').addEventListener('click', (e) => {
    const summary = getInventoryReport(window.workingInventory);
    updateSummary(
      'Knygų inventorius',
      renderInfoTable(
        summary.categoryTotals,
        {
          Viso: summary.total,
        },
        formatMoney
      )
    );
  });
});
