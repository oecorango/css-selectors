import { CreateEltment } from '../classes/Create-element';

function createLevel01(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_3', 'strobe');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_3', 'strobe');
  const elem3 = new CreateEltment('.current-task', 'div', 'train');

  const arrElem = [elem1, elem2, elem3];
  arrElem.map((val) => val.create());
}

function createLevel02(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_2', 'strobe');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_3');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_2', 'strobe');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');

  const arrElem = [elem1, elem2, elem3, elem4];
  arrElem.map((val) => val.create());
}

function createLevel03(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_3');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_1', 'strobe');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');

  const arrElem = [elem1, elem2, elem3, elem4];
  arrElem.map((val) => val.create());
}

function createLevel04(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_horse');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_3');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');
  const nestedElem1 = new CreateEltment('.car_2', 'div', 'horse', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1];
  arrElem.map((val) => val.create());
}

function createLevel05(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_1');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_3');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');
  const nestedElem1 = new CreateEltment('.car_1', 'div', 'mas', 'strobe');
  const nestedElem2 = new CreateEltment('.car_2', 'div', 'mas');
  const nestedElem3 = new CreateEltment('.car_3', 'div', 'goofy');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3];
  arrElem.map((val) => val.create());
}

function createLevel06(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_horse');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_3');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');
  const nestedElem1 = new CreateEltment('.car_2', 'div', 'small-horse', 'strobe');
  const nestedElem2 = new CreateEltment('.car_3', 'div', 'small-horse', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2];
  arrElem.map((val) => val.create());
}

function createLevel07(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'null');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_3');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');
  const nestedElem1 = new CreateEltment('.null', 'div', 'small-mas');
  const nestedElem2 = new CreateEltment('.car_2', 'div', 'mice');
  const nestedElem3 = new CreateEltment('.car_3', 'div', 'small-mice', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3];
  arrElem.map((val) => val.create());
}

function createLevel08(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_1');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_21');
  const elem4 = new CreateEltment('.current-task', 'div', 'car_22');

  const nestedElem1 = new CreateEltment('.car_1', 'div', 'small-mas');
  const nestedElem2 = new CreateEltment('.car_2', 'div', 'small-mice');
  const nestedElem3 = new CreateEltment('.car_21', 'div', 'small-mas', 'strobe');
  const nestedElem4 = new CreateEltment('.car_22', 'div', 'mice');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3, nestedElem4];
  arrElem.map((val) => val.create());
}

function createLevel09(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_horse');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2', 'strobe');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_3', 'strobe');
  const elem4 = new CreateEltment('.current-task', 'div', 'car_21', 'strobe');
  const nestedElem1 = new CreateEltment('.car_2', 'div', 'small-horse', 'strobe');
  const nestedElem2 = new CreateEltment('.car_3', 'div', 'small-horse', 'strobe');
  const nestedElem3 = new CreateEltment('.car_21', 'div', 'horse', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3];
  arrElem.map((val) => val.create());
}

function createLevel10(): void {
  const elem1 = new CreateEltment('.current-task', 'div', 'car_3', 'strobe');
  const elem2 = new CreateEltment('.current-task', 'div', 'car_2', 'strobe');
  const elem3 = new CreateEltment('.current-task', 'div', 'car_1', 'strobe');
  const elem4 = new CreateEltment('.current-task', 'div', 'train');
  const nestedElem1 = new CreateEltment('.car_1', 'div', 'mice', 'strobe');
  const nestedElem2 = new CreateEltment('.car_2', 'div', 'goofy', 'strobe');
  const nestedElem3 = new CreateEltment('.car_3', 'div', 'mas', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3];
  arrElem.map((val) => val.create());
}

export {
  createLevel01,
  createLevel02,
  createLevel03,
  createLevel04,
  createLevel05,
  createLevel06,
  createLevel07,
  createLevel08,
  createLevel09,
  createLevel10,
};
