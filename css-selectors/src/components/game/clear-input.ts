export function clearInputValue(): void {
  const input: HTMLInputElement | null = document.querySelector('.input-css__code');
  if (input) input.value = '';
}
