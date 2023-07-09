const localStorageItem = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

export function loadProgress(): void {
  localStorageItem.forEach((el) => {
    const levelComplete = localStorage.getItem(`level-${el}`);
    if (levelComplete === 'complite') {
      const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
      buttons.forEach((btn) => {
        if (btn.innerText === el) btn.classList.add('task_complete');
      });
    }
  });
}
