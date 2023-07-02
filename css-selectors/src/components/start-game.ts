import { EventEmitter } from './classes/EventEmeitter';
import { DataStorage } from './classes/Storage';
import { createLevel } from './game/tasks';

export function startGame(): void {
  const game = document.querySelector('.current-task');

  const currentLevel = EventEmitter.getLocalStorage('level');
  DataStorage.setValue('level', currentLevel);

  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll(`.task`);
  buttons.forEach((btn) => {
    if (btn.innerText === currentLevel) btn.classList.add('task_current');
  });

  buttons.forEach((button) => {
    EventEmitter.onClickButton(button);
  });

  if (game?.children) createLevel(currentLevel);

  const inputCss = document.querySelector('.input-css__code');
  const btnEnter = document.querySelector('.button-css__code');
  EventEmitter.getInputValue(inputCss as HTMLInputElement, btnEnter as HTMLElement);
}
