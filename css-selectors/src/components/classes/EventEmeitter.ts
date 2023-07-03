import { createLevel } from '../game/tasks';
import { corretAnswer } from '../game/task-complite';
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

export class EventEmitter {
  public static mouseover(elem: HTMLElement | null): void {
    if (elem) {
      elem.addEventListener('mouseover', () => {
        // console.log('1233');
        // elem.classList.add('aaa');
      });
    }
  }

  public static onClickButton(elem: HTMLElement | null): void {
    if (elem) {
      elem.addEventListener('click', () => {
        if (elem.classList.contains('help-game')) {
          this.setInputValue();
          setFocus();
        }
        if (elem.classList.contains('reset-game')) {
          resetGame();
          this.setLocalStorage('level', '01');
          this.setLocalStorage('current-level', '01');
          createHtmlEditor('01');
          highlightCode();
          changeClass('task', 'add', 'task_current', '01');
        }
        if (elem.classList.contains('task')) {
          clearInputValue();
          removeElementPrevLevel();
          createHtmlEditor(elem.innerText);
          highlightCode();
          this.setLocalStorage('level', elem.innerText);
          createLevel(elem.innerText);
          DataStorage.setValue('level', elem.innerText);
          changeClass('task', 'remove', 'task_current');
          setFocus();
          elem.classList.add('task_current');
          this.setLocalStorage('current-level', elem.innerText);
        }
      });
    }
  }

  public static setLocalStorage(name: string, value: string): void {
    window.addEventListener('beforeunload', () => localStorage.setItem(name, value));
  }

  public static getLocalStorage(name: string): string {
    const levels: string | null = localStorage.getItem(name);
    if (levels === null) return '01';
    return levels;
  }

  public static setInputValue(): void {
    getHint();
  }

  public static getInputValue(input: HTMLInputElement | null, button: HTMLElement | null): void {
    if (input) {
      input.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          const nextLevel = nextLevelNum();

          this.setLocalStorage('level', nextLevel);
          corretAnswer(input.value);
        }
      });

      if (button) {
        button.addEventListener('click', () => {
          const nextLevel = nextLevelNum();
          setFocus();

          this.setLocalStorage('level', nextLevel);
          corretAnswer(input.value);
        });
      }
    }
  }
}
