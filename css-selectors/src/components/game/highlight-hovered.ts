import { EventEmitter } from '../classes/EventEmeitter';

export function highlightElement(): void {
  const elem: HTMLElement | null = document.querySelector('.current-task');
  if (elem) {
    const chidren = Array.from(elem.getElementsByTagName('*'));
    const event = new EventEmitter(chidren);
    event.mouseover();
  }
}
