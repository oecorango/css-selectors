import { DataStorage } from '../classes/Storage';
import { removeElementPrevLevel } from '../view/remove-element';
import { changeClass } from './change-class-for-elem';
import { createLevel } from './tasks';

const localStorageItem = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

export function resetGame(): void {
  DataStorage.setValue('level', '01');
  removeElementPrevLevel();

  localStorageItem.map((el) => localStorage.removeItem(`level-${el}`));

  const gameIsWin = document.querySelector('.modal');
  gameIsWin?.remove();

  changeClass('task', 'remove', 'task_current');
  changeClass('task', 'remove', 'task_complete');
  createLevel('01');
}
