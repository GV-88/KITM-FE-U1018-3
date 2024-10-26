function createElementExt(tag, classList, attributes, text) {
  let element = document.createElement(tag);
  if (Array.isArray(classList) && classList.length > 0) {
    element.classList.add(...classList);
  } else if (typeof classList === 'string' && classList.length > 0) {
    element.classList.add(classList);
  }
  if (attributes) {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  if (text) {
    element.appendChild(document.createTextNode(text));
  }
  return element;
}

/**
 * Toggles disabled attribute based on specified condition
 * @param {HTMLElement} element
 * @param {boolean} condition true to enable, false to disable
 */
function setDisabledAttribute(element, condition) {
  if (!condition) {
    element.setAttribute('disabled', '');
  } else {
    element.removeAttribute('disabled');
  }
}

function toggleClassByCondition(element, cssClass, condition) {
  if (condition) {
    element.classList.remove(cssClass);
  } else {
    element.classList.add(cssClass);
  }
}

function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function smoothRemove(parent, child) {
  if (parent && parent.contains(child)) {
    parent.removeChild(child);
  }
}

function formatMoney(num) {
  return num.toFixed(2) + ' \u{20AC}';
}
