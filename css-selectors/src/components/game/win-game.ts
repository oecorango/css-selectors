import { ALL_LEVELS_COUNT } from '../utils/constants';
import { createElement } from '../utils/create-element';

export function winGame(): void {
  let levelComplete = 0;

  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    if (btn.classList.contains('task_complete')) levelComplete += 1;
  });

  if (levelComplete === ALL_LEVELS_COUNT) {
    createElement('main', 'div', 'modal', 'You WIN!!!');
  }
}
