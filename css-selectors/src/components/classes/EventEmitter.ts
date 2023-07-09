import { createLevel } from '../game/level-for-game';
import { correctAnswer } from '../game/task-complete';
import { DataStorage } from './Storage';
import { removeElementPrevLevel } from '../view/remove-element';
import { createHtmlEditor } from '../view/create-next_page';
import { highlightCode } from '../view/highlight-code';
import { changeClass } from '../game/change-class-for-elem';
import { setFocus } from '../view/set-focus';
import { nextLevelNum } from '../game/next-level';
import { getHint } from '../game/get-hint';
import { clearInputValue } from '../game/clear-input';
import { resetGame } from '../game/reset-game';
import { NEW_GAME_LEVEL } from '../utils/constants';

export class EventEmitter {
  private elems: Element[] | null;

  constructor(elems: Element[] | null) {
    this.elems = elems;
  }

  public mouseOverOut(): void {
    if (this.elems) {
      this.elems.forEach((element) => {
        element.addEventListener('mouseover', () => {
          element.classList.add('highlight');
        });
      });
      this.elems.forEach((element) => {
        element.addEventListener('mouseout', () => {
          element.classList.remove('highlight');
        });
      });
    }
  }

  public static onClickButton(elem: HTMLElement | null): void {
    if (elem) {
      elem.addEventListener('click', () => {
        if (elem.classList.contains('help-game')) {
          getHint();
          setFocus();
        }
        if (elem.classList.contains('reset-game')) {
          resetGame();
          DataStorage.setLocalStorage('level', NEW_GAME_LEVEL);
          DataStorage.setLocalStorage('current-level', NEW_GAME_LEVEL);
          createHtmlEditor(NEW_GAME_LEVEL);
          highlightCode();
          changeClass('task', 'add', 'task_current', NEW_GAME_LEVEL);
        }
        if (elem.classList.contains('task')) {
          clearInputValue();
          removeElementPrevLevel();
          createHtmlEditor(elem.innerText);
          highlightCode();
          DataStorage.setLocalStorage('level', elem.innerText);
          createLevel(elem.innerText);
          DataStorage.setValue('level', elem.innerText);
          changeClass('task', 'remove', 'task_current');
          setFocus();
          elem.classList.add('task_current');
          DataStorage.setLocalStorage('current-level', elem.innerText);
        }
      });
    }
  }

  public static getInputValue(input: HTMLInputElement | null, button: HTMLElement | null): void {
    if (input) {
      input.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          DataStorage.setLocalStorage(`level-${DataStorage.getValue('level')}`, 'complete');
          const nextLevel = nextLevelNum();

          DataStorage.setLocalStorage('level', nextLevel);
          correctAnswer(input.value);
        }
      });

      if (button) {
        button.addEventListener('click', () => {
          DataStorage.setLocalStorage(`level-${DataStorage.getValue('level')}`, 'complete');
          const nextLevel = nextLevelNum();
          setFocus();

          DataStorage.setLocalStorage('level', nextLevel);
          correctAnswer(input.value);
        });
      }
    }
  }
}
