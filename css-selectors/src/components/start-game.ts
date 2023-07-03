import { EventEmitter } from './classes/EventEmeitter';
import { DataStorage } from './classes/Storage';
import { createLevel } from './game/tasks';
import { setFocus } from './view/set-focus';

export function startGame(): void {
  const game = document.querySelector('.current-task');

  const currentLevel = EventEmitter.getLocalStorage('level');
  DataStorage.setValue('level', currentLevel);

  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    if (btn.innerText === currentLevel) btn.classList.add('task_current');
  });

  buttons.forEach((button) => {
    EventEmitter.onClickButton(button);
  });

  if (game?.children) createLevel(currentLevel);

  const getInputCss = setFocus();
  const btnEnter = document.querySelector('.button-css__code');
  EventEmitter.getInputValue(getInputCss, btnEnter as HTMLElement);
}
