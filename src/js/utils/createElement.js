export const createElement = (obj) => {
  const element = document.createElement(obj.tagName);

  if (obj.id) {
    element.id = obj.id;
  }

  if (obj.classList) {
    obj.classList.forEach((className) => {
      element.classList.add(className);
    });
  }

  if (obj.text) {
    element.textContent = obj.text;
  }

  if (obj.src) {
    element.src = obj.src;
  }

  if (obj.dataset) {
    Object.entries(obj.dataset).forEach(([dataset, value]) => {
      element.dataset[dataset] = value;
    });
  }

  if (obj.children) {
    obj.children.forEach((child) => {
      const childElement = createElement(child);

      element.appendChild(childElement);
    });
  }

  return element;
};
