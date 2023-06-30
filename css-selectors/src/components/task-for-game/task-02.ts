import { CreateEltment } from '../classes/Create-element';

export function createLevel02(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 't-shirt');
  const elem2 = new CreateEltment('.current-task', 'div', 't-shirt');
  const elem3 = new CreateEltment('.current-task', 'div', 'pillow');

  elem1.create();
  elem2.create();
  elem3.create();
}
