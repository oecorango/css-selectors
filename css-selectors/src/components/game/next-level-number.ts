import { DataStorage } from '../classes/Storage';
import { ALL_LEVELS, NEW_GAME_LEVEL } from '../utils/constants';

export function nextLevelNum(): string {
  const currentLevel = DataStorage.getValue('level');
  let result = NEW_GAME_LEVEL;

  if (currentLevel) {
    const index = ALL_LEVELS.indexOf(currentLevel);
    if (index < ALL_LEVELS.length - 1) {
      result = ALL_LEVELS[index + 1];
    }
  }
  return result;
}
