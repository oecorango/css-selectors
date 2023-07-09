export function createElement(
  parentElement: string,
  tag: string,
  className: string,
  innerHTML?: string,
  secondClassName?: string,
): void {
  const parent = document.querySelector(parentElement);
  const createElem = document.createElement(tag);
  createElem.classList.add(className);
  if (secondClassName) {
    createElem.classList.add(secondClassName);
  }
  if (innerHTML) {
    createElem.innerHTML = innerHTML;
  }
  parent?.append(createElem);
}
