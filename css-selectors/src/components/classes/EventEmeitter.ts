import { createLevel } from '../game/tasks';
import { corretAnswer } from '../game/task-complite';
import { DataStorage } from './Storage';
import { removeElementPrevLevel } from '../view/remove-element';
import { createHtmlEditor } from '../view/create-next_page';
import { highlightCode } from '../view/highlight-code';

export class EventEmitter {
  public static mouseover(elem: HTMLElement | null): void {
    if (elem) {
      elem.addEventListener('mouseover', () => {
        // console.log('1233');
        // elem.classList.add('aaa');
      });
    }
  }

  public static onClickButton(elem: HTMLElement | null /* , func: ToogleClassName */): void {
    if (elem) {
      elem.addEventListener('click', () => {
        removeElementPrevLevel();
        createHtmlEditor(elem.innerText);
        highlightCode();
        this.setLocalStorage('level', elem.innerText);
        createLevel(elem.innerText);
        DataStorage.setValue('level', elem.innerText);

        const buttons = document.querySelectorAll('.task');
        buttons.forEach((btn) => btn.classList.remove('task_current'));
        elem.classList.add('task_current');
        this.setLocalStorage('current-level', elem.innerText);
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

  public static setInputValue(str: string): void {
    // console.log('object');
  }

  public static getInputValue(input: HTMLInputElement | null, button: HTMLElement | null): void {
    if (input) {
      input.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          corretAnswer(input.value);
        }
      });

      if (button) {
        button.addEventListener('click', () => {
          corretAnswer(input.value);
        });
      }
    }
  }
}
