import { DataStorage } from '../classes/Storage';
import { LOCAL_STORAGE_ITEM, NEW_GAME_LEVEL } from '../utils/constants';

export function nextLevelNum(): string {
  const currentLevel = DataStorage.getValue('level');
  let result = NEW_GAME_LEVEL;

  if (currentLevel) {
    const index = LOCAL_STORAGE_ITEM.indexOf(currentLevel);
    if (index < LOCAL_STORAGE_ITEM.length - 1) {
      result = LOCAL_STORAGE_ITEM[index + 1];
    }
  }
  return result;
}
