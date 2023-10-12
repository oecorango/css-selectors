import { DataStorage } from '../classes/Storage';
import { Level } from '../types/types';
import { ALL_LEVELS } from '../utils/constants';

export function nextLevel(): Level {
  const currentLevel = DataStorage.getValue('level');

  if (currentLevel) {
    const index = ALL_LEVELS.indexOf(currentLevel);
    if (index < ALL_LEVELS.length - 1) {
      return ALL_LEVELS[index + 1];
    }
  }
  return ALL_LEVELS[0];
}
