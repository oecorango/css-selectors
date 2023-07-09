export function printTimeOut(stringToPrint: string, charNumberString: number): void {
  const input: HTMLInputElement | null = document.querySelector('.input-css__code');

  if (input && charNumberString < stringToPrint.length) {
    input.value = stringToPrint.substring(0, charNumberString + 1);
    const newCharNumber = charNumberString + 1;
    setTimeout(() => {
      printTimeOut(stringToPrint, newCharNumber);
    }, 100);
  }
}
