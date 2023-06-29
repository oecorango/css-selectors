import { createLevel } from '../task-for-game/tasks';

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
        createLevel('02');
      });
    }
  }

  public static setLocalStorage(value: string): void {
    window.addEventListener('beforeunload', () => localStorage.setItem('level', value));
  }

  public static getLocalStorage(): string | null {
    const levels: string | null = localStorage.getItem('level');
    return levels;
  }
}
