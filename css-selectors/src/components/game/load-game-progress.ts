import { LOCAL_STORAGE_ITEM } from '../utils/constants';

export function loadProgress(): void {
  LOCAL_STORAGE_ITEM.forEach((el) => {
    const levelComplete = localStorage.getItem(`level-${el}`);
    if (levelComplete === 'complete') {
      const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
      buttons.forEach((btn) => {
        if (btn.innerText === el) btn.classList.add('task_complete');
      });
    }
  });
}
