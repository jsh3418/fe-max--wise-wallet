export const createNode = (obj) => {
  const element = document.createElement(obj.element.tagName);

  if (obj.element.id) {
    element.id = obj.element.id;
  }

  if (obj.element.classList) {
    obj.element.classList.forEach((className) => {
      element.classList.add(className);
    });
  }

  if (obj.element.text) {
    element.textContent = obj.element.text;
  }

  if (obj.element.src) {
    element.src = obj.element.src;
  }

  if (obj.element.children) {
    obj.element.children.forEach((child) => {
      const childElement = createNode(child);

      element.appendChild(childElement);
    });
  }

  return element;
};
