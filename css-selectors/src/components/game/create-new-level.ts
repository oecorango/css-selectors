import { DataStorage } from '../classes/Storage';
import { Level } from '../types/types';
import { LOCAL_STORAGE_ITEM } from '../utils/constants';

export function nextLevel(): Level {
  const currentLevel = DataStorage.getValue('level');

  if (currentLevel) {
    const index = LOCAL_STORAGE_ITEM.indexOf(currentLevel);
    if (index < LOCAL_STORAGE_ITEM.length - 1) {
      return LOCAL_STORAGE_ITEM[index + 1];
    }
  }
  return LOCAL_STORAGE_ITEM[0];
}
