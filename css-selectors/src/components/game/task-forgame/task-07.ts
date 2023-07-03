import { CreateEltment } from '../../classes/Create-element';

export function createLevel07(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'null');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_3');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');
  const nestedElem1 = new CreateEltment('.null', 'div', 'small-mas');
  const nestedElem2 = new CreateEltment('.car_2', 'div', 'mice');
  const nestedElem3 = new CreateEltment('.car_3', 'div', 'small-mice', 'strobe');

  elem1.create();
  elem2.create();
  elem3.create();
  elem4.create();
  nestedElem1.create();
  nestedElem2.create();
  nestedElem3.create();
}
