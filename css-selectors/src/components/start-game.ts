// import { CreateEltment } from './classes/Create-element';
import { EventEmitter } from './classes/EventEmeitter';
import { createLevel } from './task-for-game/tasks';
// import levelsTask from './view/levels.json';

// function addClassForLevel(): ToogleClassName {
//   return 'assdf';
// }

export function startGame(): void {
  const game = document.querySelector('.current-task');

  const currentLevel = EventEmitter.getLocalStorage('level');

  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll(`.task`);
  buttons.forEach((btn) => {
    if (btn.innerText === currentLevel) btn.classList.add('task_current');
  });

  buttons.forEach((button) => {
    EventEmitter.onClickButton(button);
  });

  if (game?.children) createLevel(currentLevel);
}
