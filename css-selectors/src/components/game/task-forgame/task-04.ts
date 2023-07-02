import { CreateEltment } from '../../classes/Create-element';

export function createLevel04(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_horse');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_3');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');
  const nestedElem1 = new CreateEltment('.car_2', 'div', 'horse', 'strobe');

  elem1.create();
  elem2.create();
  elem3.create();
  elem4.create();
  nestedElem1.create();
}
