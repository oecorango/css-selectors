import { EventEmitter } from './classes/EventEmitter';
import { DataStorage } from './classes/Storage';
import { loadProgress } from './game/load-game-progress';
import { createLevel } from './game/create-level';
import { setFocus } from './view/set-focus';
import { highlightElement } from './game/highlight-hovered';
import { Level } from './types/types';
import { LOCAL_STORAGE_ITEM } from './utils/constants';

export function startGame(): void {
  loadProgress();
  const game = document.querySelector('.current-task');

  const currentLevel = DataStorage.getLocalStorage('level');

  // смог придумать только такую проверку.
  // так как из localStorage возвращается уровень но с типом string,
  // а записать его уже нужно в тип Level, в итоге смог родить только такую проверку
  // есть ли какой то другой спобоб???
  //
  // пробвал по разному, но работает только когда принудительно указываю, что считать стоку типом Level
  // DataStorage.setValue('level', <Level>currentLevel);
  // но если на входе появляется какое либо отличное значение от '01, 02 ... '10', то все падает, а с
  // такой проверкой если отличное значение приходит, то просто запускает уровень '01'.

  const indexOfLevel = LOCAL_STORAGE_ITEM.indexOf(<Level>currentLevel);
  if (indexOfLevel) DataStorage.setValue('level', LOCAL_STORAGE_ITEM[indexOfLevel]);

  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    if (btn.innerText === currentLevel) btn.classList.add('task_current');
  });

  buttons.forEach((button) => {
    EventEmitter.onClickButton(button);
  });

  if (game?.children) createLevel(LOCAL_STORAGE_ITEM[indexOfLevel]);

  const getInputCss = setFocus();
  const btnEnter: HTMLElement | null = document.querySelector('.button-css__code');
  EventEmitter.getInputValue(getInputCss, btnEnter);

  highlightElement();
}
