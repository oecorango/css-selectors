import { DataStorage } from '../classes/Storage';
import { ANSWER_MAP, NEW_GAME_LEVEL } from '../utils/constants';
import { clearInputValue } from './clear-input';
import { printTimeOut } from './print-correct-answer';

const startCharNumber = 0;

export function getHint(): void {
  const currentLevel = DataStorage.getValue('level');
  let correctAnswer = '';
  if (!currentLevel) {
    correctAnswer = ANSWER_MAP[NEW_GAME_LEVEL];
  } else {
    correctAnswer = ANSWER_MAP[currentLevel];
  }
  clearInputValue();
  printTimeOut(correctAnswer, startCharNumber);
}
