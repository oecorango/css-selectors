import { DataStorage } from '../classes/Storage';

export function nextLevelNum(): string {
  const currentLevel = DataStorage.getValue('level');

  function nextLevel(): string {
    let result = '01';
    if (Number(currentLevel) < 9) {
      result = `0${Number(currentLevel) + 1}`;
    }
    if (Number(currentLevel) >= 9 && Number(currentLevel) < 11) {
      result = (Number(currentLevel) + 1).toString();
    }
    return result;
  }

  return nextLevel();
}
