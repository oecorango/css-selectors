import { ALL_LEVELS } from '../utils/constants';

export function loadProgress(): void {
  ALL_LEVELS.forEach((el) => {
    const levelComplete = localStorage.getItem(`level-${el}`);
    if (levelComplete === 'complete') {
      const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
      buttons.forEach((btn) => {
        if (btn.innerText === el) btn.classList.add('task_complete');
      });
    }
  });
}
