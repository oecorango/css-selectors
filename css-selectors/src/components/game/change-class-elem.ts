export function changeClass(tag: string, action: string, name: string, elemValue?: string): void {
  if (action === 'add') {
    const elements = document.querySelectorAll(`.${tag}`);
    elements.forEach((e) => {
      if (elemValue && e.textContent === elemValue) {
        e.classList.add(name);
      }
    });
  }
  if (action === 'remove') {
    const elements = document.querySelectorAll(`.${tag}`);
    elements.forEach((e) => e.classList.remove(name));
  }
}
