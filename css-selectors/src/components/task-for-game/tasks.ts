import './tasks.scss';
// import { CreateEltment } from '../classes/Create-element';
import { createLevel01 } from './task-01';
import { createLevel02 } from './task-02';
import { createLevel03 } from './task-03';

export function createLevel(num: string | null): void {
  const task = document.querySelector('.current-task');

  if (task && num) task.classList.add(`task-${num}`);
  if (task && num === null) task.classList.add('task-01');

  if (num === null || num === '01') createLevel01();
  if (num === '02') createLevel02();
  if (num === '03') createLevel03();
}
