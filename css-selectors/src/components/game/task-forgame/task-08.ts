import { CreateEltment } from '../../classes/Create-element';

export function createLevel08(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_1');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_21');
  const elem4 = new CreateEltment('.current-task', 'div', 'car_22');

  const nestedElem1 = new CreateEltment('.car_1', 'div', 'small-mas');
  const nestedElem2 = new CreateEltment('.car_2', 'div', 'small-mice');
  const nestedElem3 = new CreateEltment('.car_21', 'div', 'small-mas', 'strobe');
  const nestedElem4 = new CreateEltment('.car_22', 'div', 'mice');

  elem1.create();
  elem2.create();
  elem3.create();
  elem4.create();
  nestedElem1.create();
  nestedElem2.create();
  nestedElem3.create();
  nestedElem4.create();
}
