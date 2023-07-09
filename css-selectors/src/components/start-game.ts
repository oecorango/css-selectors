import { EventEmitter } from './classes/EventEmitter';
import { DataStorage } from './classes/Storage';
import { loadProgress } from './game/load-game-progress';
import { createLevel } from './game/level-for-game';
import { setFocus } from './view/set-focus';
import { highlightElement } from './game/highlight-hovered';

export function startGame(): void {
  loadProgress();
  const game = document.querySelector('.current-task');

  const currentLevel = DataStorage.getLocalStorage('level');
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
  const btnEnter: HTMLElement | null = document.querySelector('.button-css__code');
  EventEmitter.getInputValue(getInputCss, btnEnter);

  highlightElement();
}
