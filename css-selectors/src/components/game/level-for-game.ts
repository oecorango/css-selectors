import './level-for-game.scss';
import { CreateElement } from '../classes/Create-element';

function createLevel01(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'car_3', 'strobe');
  const elem2 = new CreateElement('.current-task', 'div', 'car_3', 'strobe');
  const elem3 = new CreateElement('.current-task', 'div', 'train');

  const arrElem = [elem1, elem2, elem3];
  arrElem.map((val) => val.create());
}

function createLevel02(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'car_2', 'strobe');
  const elem2 = new CreateElement('.current-task', 'div', 'car_3');
  const elem3 = new CreateElement('.current-task', 'div', 'car_2', 'strobe');
  const elem4 = new CreateElement('.current-task', 'div', 'train');

  const arrElem = [elem1, elem2, elem3, elem4];
  arrElem.map((val) => val.create());
}

function createLevel03(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'car_3');
  const elem2 = new CreateElement('.current-task', 'div', 'car_2');
  const elem3 = new CreateElement('.current-task', 'div', 'car_1', 'strobe');
  const elem4 = new CreateElement('.current-task', 'div', 'train');

  const arrElem = [elem1, elem2, elem3, elem4];
  arrElem.map((val) => val.create());
}

function createLevel04(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'car_horse');
  const elem2 = new CreateElement('.current-task', 'div', 'car_2');
  const elem3 = new CreateElement('.current-task', 'div', 'car_3');
  const elem4 = new CreateElement('.current-task', 'div', 'train');
  const nestedElem1 = new CreateElement('.car_2', 'div', 'horse', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1];
  arrElem.map((val) => val.create());
}

function createLevel05(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'car_1');
  const elem2 = new CreateElement('.current-task', 'div', 'car_2');
  const elem3 = new CreateElement('.current-task', 'div', 'car_3');
  const elem4 = new CreateElement('.current-task', 'div', 'train');
  const nestedElem1 = new CreateElement('.car_1', 'div', 'mas', 'strobe');
  const nestedElem2 = new CreateElement('.car_2', 'div', 'mas');
  const nestedElem3 = new CreateElement('.car_3', 'div', 'goofy');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3];
  arrElem.map((val) => val.create());
}

function createLevel06(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'car_horse');
  const elem2 = new CreateElement('.current-task', 'div', 'car_2');
  const elem3 = new CreateElement('.current-task', 'div', 'car_3');
  const elem4 = new CreateElement('.current-task', 'div', 'train');
  const nestedElem1 = new CreateElement('.car_2', 'div', 'small-horse', 'strobe');
  const nestedElem2 = new CreateElement('.car_3', 'div', 'small-horse', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2];
  arrElem.map((val) => val.create());
}

function createLevel07(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'null');
  const elem2 = new CreateElement('.current-task', 'div', 'car_2');
  const elem3 = new CreateElement('.current-task', 'div', 'car_3');
  const elem4 = new CreateElement('.current-task', 'div', 'train');
  const nestedElem1 = new CreateElement('.null', 'div', 'small-mas');
  const nestedElem2 = new CreateElement('.car_2', 'div', 'mice');
  const nestedElem3 = new CreateElement('.car_3', 'div', 'small-mice', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3];
  arrElem.map((val) => val.create());
}

function createLevel08(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'car_1');
  const elem2 = new CreateElement('.current-task', 'div', 'car_2');
  const elem3 = new CreateElement('.current-task', 'div', 'car_21');
  const elem4 = new CreateElement('.current-task', 'div', 'car_22');

  const nestedElem1 = new CreateElement('.car_1', 'div', 'small-mas');
  const nestedElem2 = new CreateElement('.car_2', 'div', 'small-mice');
  const nestedElem3 = new CreateElement('.car_21', 'div', 'small-mas', 'strobe');
  const nestedElem4 = new CreateElement('.car_22', 'div', 'mice');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3, nestedElem4];
  arrElem.map((val) => val.create());
}

function createLevel09(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'car_horse');
  const elem2 = new CreateElement('.current-task', 'div', 'car_2', 'strobe');
  const elem3 = new CreateElement('.current-task', 'div', 'car_3', 'strobe');
  const elem4 = new CreateElement('.current-task', 'div', 'car_21', 'strobe');
  const nestedElem1 = new CreateElement('.car_2', 'div', 'small-horse', 'strobe');
  const nestedElem2 = new CreateElement('.car_3', 'div', 'small-horse', 'strobe');
  const nestedElem3 = new CreateElement('.car_21', 'div', 'horse', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3];
  arrElem.map((val) => val.create());
}

function createLevel10(): void {
  const elem1 = new CreateElement('.current-task', 'div', 'car_3', 'strobe');
  const elem2 = new CreateElement('.current-task', 'div', 'car_2', 'strobe');
  const elem3 = new CreateElement('.current-task', 'div', 'car_1', 'strobe');
  const elem4 = new CreateElement('.current-task', 'div', 'train');
  const nestedElem1 = new CreateElement('.car_1', 'div', 'mice', 'strobe');
  const nestedElem2 = new CreateElement('.car_2', 'div', 'goofy', 'strobe');
  const nestedElem3 = new CreateElement('.car_3', 'div', 'mas', 'strobe');

  const arrElem = [elem1, elem2, elem3, elem4, nestedElem1, nestedElem2, nestedElem3];
  arrElem.map((val) => val.create());
}

export function createLevel(levelNum: string | null): void {
  if (levelNum === null || levelNum === '01') createLevel01();
  if (levelNum === '02') createLevel02();
  if (levelNum === '03') createLevel03();
  if (levelNum === '04') createLevel04();
  if (levelNum === '05') createLevel05();
  if (levelNum === '06') createLevel06();
  if (levelNum === '07') createLevel07();
  if (levelNum === '08') createLevel08();
  if (levelNum === '09') createLevel09();
  if (levelNum === '10') createLevel10();
}
