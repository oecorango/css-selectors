export function setFocus(): HTMLInputElement {
  const inputCss = document.querySelector('.input-css__code') as HTMLInputElement;
  inputCss.focus();
  return inputCss;
}
