export function printTimeOut(stringToPrint: string, startPrintNumber: number): void {
  const input: HTMLInputElement | null = document.querySelector('.input-css__code');

  if (input && startPrintNumber < stringToPrint.length) {
    input.value = stringToPrint.substring(0, startPrintNumber + 1);
    const newCharNumber = startPrintNumber + 1;
    setTimeout(() => {
      printTimeOut(stringToPrint, newCharNumber);
    }, 100);
  }
}
