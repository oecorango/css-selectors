import { EventEmitter } from '../classes/EventEmitter';

export function highlightElement(): void {
  const elem: HTMLElement | null = document.querySelector('.current-task');
  if (elem) {
    const children = Array.from(elem.getElementsByTagName('*'));
    const event = new EventEmitter(children);
    event.mouseOverOut();
  }
}
