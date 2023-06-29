export class EventEmitter {
  public static mouseover(elem: HTMLElement | null): void {
    if (elem) {
      elem.addEventListener('mouseover', () => {
        // console.log('1233');
        // elem.classList.add('aaa');
      });
    }
  }

  public static onClick(elem: HTMLElement | null): void {
    if (elem) {
      elem.addEventListener('click', () => {
        console.log('1233');
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
