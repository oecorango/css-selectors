import './tasks.scss';
import {
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
} from './level-for-game';

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
