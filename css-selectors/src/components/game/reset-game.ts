import { DataStorage } from '../classes/Storage';
import { removeElementPrevLevel } from '../view/remove-element';
import { changeClass } from './change-class-for-elem';
import { createLevel } from './create-level';
import { NEW_GAME_LEVEL, LOCAL_STORAGE_ITEM } from '../utils/constants';

export function resetGame(): void {
  DataStorage.setValue('level', NEW_GAME_LEVEL);
  removeElementPrevLevel();

  LOCAL_STORAGE_ITEM.map((el) => localStorage.removeItem(`level-${el}`));

  const gameIsWin = document.querySelector('.modal');
  gameIsWin?.remove();

  changeClass('task', 'remove', 'task_current');
  changeClass('task', 'remove', 'task_complete');
  createLevel(NEW_GAME_LEVEL);
}
