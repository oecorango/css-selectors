import { DataStorage } from '../classes/Storage';
import { removeElementPrevLevel } from '../view/remove-element';
import { changeClass } from './change-class-for-elem';
import { createLevel } from './tasks';

export function resetGame(): void {
  DataStorage.setValue('level', '01');
  removeElementPrevLevel();
  const gameRender = document.querySelector('.modal');
  gameRender?.remove();

  changeClass('task', 'remove', 'task_current');
  changeClass('task', 'remove', 'task_complete');
  createLevel('01');
}
