export function changeClass(tag: string, action: string, name: string, elemValue?: string): void {
  const elements = document.querySelectorAll(`.${tag}`);

  if (action === 'add') {
    elements.forEach((e) => {
      if (elemValue && e.textContent === elemValue) {
        e.classList.add(name);
      }
    });
  }

  if (action === 'remove') {
    elements.forEach((e) => e.classList.remove(name));
  }
}
