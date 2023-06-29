import { CreateEltment } from '../classes/Create-element';

export function createLevel01(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 't-shirt');
  const elem2 = new CreateEltment('.current-task', 'div', 't-shirt');

  elem1.create();
  elem2.create();
}
