import { createLevel } from '../game/create-level';
import { correctAnswer } from '../game/task-complete';
import { DataStorage } from './Storage';
import { removeElementPrevLevel } from '../view/remove-element';
import { createHtmlEditor } from '../view/create-next-html-editor';
import { highlightCode } from '../view/highlight-code';
import { changeClass } from '../game/change-class-for-elem';
import { setFocus } from '../view/set-focus';
import { nextLevelNum } from '../game/next-level-number';
import { getHint } from '../game/get-hint';
import { clearInputValue } from '../game/clear-input';
import { resetGame } from '../game/reset-game';
import { LOCAL_STORAGE_ITEM, NEW_GAME_LEVEL } from '../utils/constants';
import { Level } from '../types/types';

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

          const indexOfLevel = LOCAL_STORAGE_ITEM.indexOf(<Level>elem.innerText);
          if (indexOfLevel >= 0) {
            createLevel(LOCAL_STORAGE_ITEM[indexOfLevel]);
            DataStorage.setValue('level', LOCAL_STORAGE_ITEM[indexOfLevel]);
          }

          changeClass('task', 'remove', 'task_current');
          setFocus();
          elem.classList.add('task_current');
        }
      });
    }
  }

  public static getInputValue(input: HTMLInputElement | null, button: HTMLElement | null): void {
    if (input) {
      const nextLevelNumber = nextLevelNum();
      input.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          DataStorage.setLocalStorage(`level-${DataStorage.getValue('level')}`, 'complete');

          DataStorage.setLocalStorage('level', nextLevelNumber);
          correctAnswer(input.value);
        }
      });

      if (button) {
        button.addEventListener('click', () => {
          DataStorage.setLocalStorage(`level-${DataStorage.getValue('level')}`, 'complete');
          setFocus();

          DataStorage.setLocalStorage('level', nextLevelNumber);
          correctAnswer(input.value);
        });
      }
    }
  }
}
