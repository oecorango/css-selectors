import './level-for-game.scss';
import { createElement } from '../utils/create-element';

export function createLevel01(): void {
  createElement('.current-task', 'div', ['car_3', 'strobe']);
  createElement('.current-task', 'div', ['car_3', 'strobe']);
  createElement('.current-task', 'div', ['train']);
}

export function createLevel02(): void {
  createElement('.current-task', 'div', ['car_2', 'strobe']);
  createElement('.current-task', 'div', ['car_3']);
  createElement('.current-task', 'div', ['car_2', 'strobe']);
  createElement('.current-task', 'div', ['train']);
}

export function createLevel03(): void {
  createElement('.current-task', 'div', ['car_3']);
  createElement('.current-task', 'div', ['car_2']);
  createElement('.current-task', 'div', ['car_1', 'strobe']);
  createElement('.current-task', 'div', ['train']);
}

export function createLevel04(): void {
  createElement('.current-task', 'div', ['car_horse']);
  createElement('.current-task', 'div', ['car_2']);
  createElement('.current-task', 'div', ['car_3']);
  createElement('.current-task', 'div', ['train']);
  createElement('.car_2', 'div', ['horse', 'strobe']);
}

export function createLevel05(): void {
  createElement('.current-task', 'div', ['car_1']);
  createElement('.current-task', 'div', ['car_2']);
  createElement('.current-task', 'div', ['car_3']);
  createElement('.current-task', 'div', ['train']);
  createElement('.car_1', 'div', ['mas', 'strobe']);
  createElement('.car_2', 'div', ['mas']);
  createElement('.car_3', 'div', ['goofy']);
}

export function createLevel06(): void {
  createElement('.current-task', 'div', ['car_horse']);
  createElement('.current-task', 'div', ['car_2']);
  createElement('.current-task', 'div', ['car_3']);
  createElement('.current-task', 'div', ['train']);
  createElement('.car_2', 'div', ['small-horse', 'strobe']);
  createElement('.car_3', 'div', ['small-horse', 'strobe']);
}

export function createLevel07(): void {
  createElement('.current-task', 'div', ['null']);
  createElement('.current-task', 'div', ['car_2']);
  createElement('.current-task', 'div', ['car_3']);
  createElement('.current-task', 'div', ['train']);
  createElement('.null', 'div', ['small-mas']);
  createElement('.car_2', 'div', ['mice']);
  createElement('.car_3', 'div', ['small-mice', 'strobe']);
}

export function createLevel08(): void {
  createElement('.current-task', 'div', ['car_1']);
  createElement('.current-task', 'div', ['car_2']);
  createElement('.current-task', 'div', ['car_21']);
  createElement('.current-task', 'div', ['car_22']);

  createElement('.car_1', 'div', ['small-mas']);
  createElement('.car_2', 'div', ['small-mice']);
  createElement('.car_21', 'div', ['small-mas', 'strobe']);
  createElement('.car_22', 'div', ['mice']);
}

export function createLevel09(): void {
  createElement('.current-task', 'div', ['car_horse']);
  createElement('.current-task', 'div', ['car_2', 'strobe']);
  createElement('.current-task', 'div', ['car_3', 'strobe']);
  createElement('.current-task', 'div', ['car_21', 'strobe']);
  createElement('.car_2', 'div', ['small-horse', 'strobe']);
  createElement('.car_3', 'div', ['small-horse', 'strobe']);
  createElement('.car_21', 'div', ['horse', 'strobe']);
}

export function createLevel10(): void {
  createElement('.current-task', 'div', ['car_3', 'strobe']);
  createElement('.current-task', 'div', ['car_2', 'strobe']);
  createElement('.current-task', 'div', ['car_1', 'strobe']);
  createElement('.current-task', 'div', ['train']);
  createElement('.car_1', 'div', ['mice', 'strobe']);
  createElement('.car_2', 'div', ['goofy', 'strobe']);
  createElement('.car_3', 'div', ['mas', 'strobe']);
}
