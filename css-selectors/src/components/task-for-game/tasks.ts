import './tasks.scss';
// import { CreateEltment } from '../classes/Create-element';
import { createLevel01 } from './task-01';
import { createLevel02 } from './task-02';
import { createLevel03 } from './task-03';

export function createLevel(levelNum: string | null): void {
  // const buttons = document.querySelectorAll(`.task`);
  // console.log(buttons);
  // if (task && levelNum) task.classList.add(`current-task_${levelNum}`);
  // if (task && levelNum === null) task.classList.add('current-task_01');

  if (levelNum === null || levelNum === '01') createLevel01();
  if (levelNum === '02') createLevel02();
  if (levelNum === '03') createLevel03();
}
