import { Level } from '../types/types';
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

const LEVEL_MAP: Record<Level, () => void> = {
  '01': createLevel01,
  '02': createLevel02,
  '03': createLevel03,
  '04': createLevel04,
  '05': createLevel05,
  '06': createLevel06,
  '07': createLevel07,
  '08': createLevel08,
  '09': createLevel09,
  '10': createLevel10,
};

export function createLevel(level: Level | null): void {
  if (level) {
    LEVEL_MAP[level]();
  } else {
    createLevel01();
  }
}
