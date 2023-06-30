import { createLevel } from '../task-for-game/tasks';
// import { CreateEltment } from './Create-element';

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
        const gameRender = document.querySelector('.current-task');
        while (gameRender?.firstChild) {
          gameRender.removeChild(gameRender.firstChild);
        }
        EventEmitter.setLocalStorage('level', elem.innerText);
        createLevel(elem.innerText);

        const buttons = document.querySelectorAll('.task');
        buttons.forEach((btn) => btn.classList.remove('task_current'));
        elem.classList.add('task_current');
        EventEmitter.setLocalStorage('current-level', elem.innerText);
      });
    }
  }

  public static setLocalStorage(name: string, value: string): void {
    window.addEventListener('beforeunload', () => localStorage.setItem(name, value));
  }

  public static getLocalStorage(name: string): string | null {
    const levels: string | null = localStorage.getItem(name);
    return levels;
  }
}
