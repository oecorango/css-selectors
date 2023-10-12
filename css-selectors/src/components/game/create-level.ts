import { Level } from '../types/types';
import { LEVEL_MAP } from '../utils/constants';
import { createLevel01 } from './level-for-game';

export function createLevel(level: Level | null): void {
  if (level) {
    LEVEL_MAP[level]();
  } else {
    createLevel01();
  }
}
