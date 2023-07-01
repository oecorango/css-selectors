import './tasks.scss';
import { createLevel01 } from './task-01';
import { createLevel02 } from './task-02';
import { createLevel03 } from './task-03';
import { createLevel04 } from './task-04';
import { createLevel05 } from './task-05';
import { createLevel06 } from './task-06';
import { createLevel07 } from './task-07';
import { createLevel08 } from './task-08';
import { createLevel09 } from './task-09';
import { createLevel10 } from './task-10';

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
