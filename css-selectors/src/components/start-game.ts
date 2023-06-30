import { EventEmitter } from './classes/EventEmeitter';
import { createLevel } from './task-for-game/tasks';
import levelsTask from './view/levels.json';

// function addClassForLevel(): ToogleClassName {
//   return 'assdf';
// }

export function startGame(): void {
  const game = document.querySelector('.current-task');

  const currentLevel = EventEmitter.getLocalStorage();

  levelsTask.forEach((value) => {
    const buttons: HTMLElement | null = document.querySelector(`.task-${value.level}`);
    EventEmitter.onClickButton(buttons);
  });

  if (game?.children) createLevel(currentLevel);
}
