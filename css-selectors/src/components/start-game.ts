import { EventEmitter } from './classes/EventEmeitter';
import { createLevel } from './task-for-game/tasks';

export function startGame(): void {
  const game = document.querySelector('.current-task');

  EventEmitter.setLocalStorage('03');
  const currentLevel = EventEmitter.getLocalStorage();

  if (game?.children) createLevel(currentLevel);
}
