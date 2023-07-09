import { createElement } from '../utils/create-element';

export function winGame(): void {
  let levelComplete = 0;

  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    if (btn.classList.contains('task_complete') || btn.classList.contains('task_help')) levelComplete += 1;
  });

  if (levelComplete === 9) {
    createElement('main', 'div', 'modal', 'You WIN!!!');
  }
}
