import { DataStorage } from '../classes/Storage';
import { storageAnswers } from './answers';
import { clearInputValue } from './clear-input';

export function getHint(): void {
  clearInputValue();

  const currentLevel = DataStorage.getValue('level');
  const numLevel = Number(currentLevel) - 1;
  const corretcAnswer = storageAnswers[numLevel];
  const input = document.getElementsByTagName('input')[0];

  function printTimeOut(str: string, num: number): void {
    if (num < str.length) {
      input.value = str.substring(0, num + 1);
      // eslint-disable-next-line no-param-reassign
      num += 1;
      setTimeout(() => {
        printTimeOut(str, num);
      }, 100);
    }
  }
  printTimeOut(corretcAnswer, 0);
}
