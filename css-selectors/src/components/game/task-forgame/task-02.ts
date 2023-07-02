import { CreateEltment } from '../../classes/Create-element';

export function createLevel02(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_2', 'strobe');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_3');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_2', 'strobe');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');

  elem1.create();
  elem2.create();
  elem3.create();
  elem4.create();
}
