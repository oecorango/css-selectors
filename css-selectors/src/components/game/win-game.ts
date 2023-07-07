import { CreateEltment } from '../classes/Create-element';

export function winGame(): void {
  let levelComplite = 0;

  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    if (btn.classList.contains('task_complete') || btn.classList.contains('task_help')) levelComplite += 1;
  });

  if (levelComplite === 9) {
    const win = new CreateEltment('main', 'div', 'modal');
    win.create('You WIN!!!');
  }
}
