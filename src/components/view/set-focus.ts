export function setFocus(): HTMLInputElement | null {
  const inputCss: HTMLInputElement | null = document.querySelector('.input-css__code');
  if (inputCss) inputCss.focus();
  return inputCss;
}
