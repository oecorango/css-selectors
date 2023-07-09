import { CreateElement } from '../classes/Create-element';

export function winGame(): void {
  let levelComplete = 0;

  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    if (btn.classList.contains('task_complete') || btn.classList.contains('task_help')) levelComplete += 1;
  });

  if (levelComplete === 9) {
    const win = new CreateElement('main', 'div', 'modal');
    win.create('You WIN!!!');
  }
}
