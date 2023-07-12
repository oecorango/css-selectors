import { EventEmitter } from './classes/EventEmitter';
import { DataStorage } from './classes/Storage';
import { loadProgress } from './game/load-game-progress';
import { createLevel } from './game/create-level';
import { setFocus } from './view/set-focus';
import { highlightElement } from './game/highlight-hovered';
import { Level } from './types/types';
import { ALL_LEVELS } from './utils/constants';

export function startGame(): void {
  loadProgress();
  const game = document.querySelector('.current-task');

  const currentLevel = DataStorage.getLocalStorage('level');

  const indexOfLevel = ALL_LEVELS.indexOf(<Level>currentLevel);
  if (indexOfLevel) DataStorage.setValue('level', ALL_LEVELS[indexOfLevel]);

  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    if (btn.innerText === currentLevel) btn.classList.add('task_current');
  });

  buttons.forEach((button) => {
    EventEmitter.onClickButton(button);
  });

  if (game?.children) createLevel(ALL_LEVELS[indexOfLevel]);

  const getInputCss = setFocus();
  const btnEnter: HTMLElement | null = document.querySelector('.button-css__code');
  EventEmitter.getInputValue(getInputCss, btnEnter);

  highlightElement();
}
