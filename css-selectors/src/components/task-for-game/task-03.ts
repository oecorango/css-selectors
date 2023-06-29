import { CreateEltment } from '../classes/Create-element';

export function createLevel03(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'paper');
  const elem2 = new CreateEltment('.current-task', 'div', 'pillow');
  const elem3 = new CreateEltment('.current-task', 'div', 't-shirt');

  elem1.create();
  elem2.create();
  elem3.create();
}
