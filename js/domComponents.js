function formatYear(year) {
  if (isNew(year)) {
    const spanElement = createElementExt('span', [], {}, year);
    spanElement.appendChild(
      createElementExt('span', ['badge', 'badge--new'], {}, 'Nauja knyga')
    );
    return spanElement;
  }
  return year;
}

function renderFieldblock(
  label,
  value,
  fieldName,
  parentBlockName,
  valueFormatter
) {
  const parentBlockPrefix = parentBlockName ? parentBlockName + '__' : '';
  const fieldNameSuffix = fieldName ? '--' + fieldName : '';
  const labelElement = createElementExt(
    'div',
    [
      parentBlockPrefix + 'field-label',
      parentBlockPrefix + 'field-label' + fieldNameSuffix,
    ],
    {},
    label
  );
  const valueElement = createElementExt(
    'div',
    [
      parentBlockPrefix + 'field-value',
      parentBlockPrefix + 'field-value' + fieldNameSuffix,
    ],
    { title: value },
    value
  );
  if (typeof valueFormatter === 'function') {
    clearChildren(valueElement);
    // Element.append() allows you to also append strings, whereas Node.appendChild() only accepts Node objects.
    valueElement.append(valueFormatter(value));
  }
  const blockElement = createElementExt('div', [
    parentBlockPrefix + 'field-block',
    parentBlockPrefix + 'field-block' + fieldNameSuffix,
  ]);
  blockElement.append(labelElement, valueElement);
  return blockElement;
}

function renderBookCard(bookobj, tagType) {
  const cardClassName = 'book-card';
  const cardElement = createElementExt(tagType ?? 'div', cardClassName);
  cardElement.append(
    renderFieldblock('Pavadinimas', bookobj.title, 'title', cardClassName),
    renderFieldblock('ISBN', bookobj.ISBN, 'isbn', cardClassName),
    renderFieldblock(
      'Metai',
      bookobj.publishing_year,
      'year',
      cardClassName,
      formatYear
    ),
    renderFieldblock('Puslapių', bookobj.pages, 'pages', cardClassName),
    renderFieldblock(
      'Kiekis',
      bookobj.quantity.toString(),
      'quantity',
      cardClassName,
      (val) =>
        val > 0 ? val : createElementExt('span', 'zero', {}, val.toString())
    ),
    renderFieldblock(
      'Kaina',
      bookobj.price,
      'price',
      cardClassName,
      formatMoney
    )
  );
  return cardElement;
}

function renderBookList(inv, dstElement) {
  const outerListElement = dstElement ?? createElementExt('ul');
  outerListElement.classList.add('book-list');
  clearChildren(outerListElement);
  for (const catObj of inv) {
    const innerListElement = createElementExt(
      'ul',
      'book-list__category-books'
    );
    catObj.books.forEach((bookObj) =>
      innerListElement.append(renderBookCard(bookObj, 'li'))
    );
    const categoryElement = createElementExt('li', 'book-list__category');
    categoryElement.append(
      createElementExt('div', 'book-list__category-title', {}, catObj.category),
      innerListElement
    );
    outerListElement.appendChild(categoryElement);
  }
  return outerListElement;
}

function renderInfoTable(dataRows, totalRow, valueFormatter) {
  function renderRow(key, value, isTotal) {
    const keyElement = createElementExt(
      'td',
      [tableClassName + '__cell', tableClassName + '__key'],
      {},
      key
    );
    const valueElement = createElementExt(
      'td',
      [tableClassName + '__cell', tableClassName + '__value'],
      {},
      value
    );
    if (typeof valueFormatter === 'function') {
      clearChildren(valueElement);
      valueElement.append(valueFormatter(value));
    }
    const rowElement = createElementExt('tr', tableClassName + '__row');
    if (isTotal) {
      rowElement.classList.add(tableClassName + '__row--total');
    }
    rowElement.append(keyElement, valueElement);
    return rowElement;
  }

  const tableClassName = 'info-table';
  const tBodyElement = createElementExt('tbody', tableClassName + '__body');
  for (key in dataRows) {
    tBodyElement.appendChild(renderRow(key, dataRows[key]));
  }
  tBodyElement.appendChild(
    renderRow(Object.keys(totalRow)[0], Object.values(totalRow)[0], true)
  );

  const tableElement = createElementExt('table', 'info-table');
  tableElement.appendChild(tBodyElement);
  return tableElement;
}
