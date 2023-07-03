import { DataStorage } from '../classes/Storage';
import { createHtmlEditor } from '../view/create-next_page';
import { highlightCode } from '../view/highlight-code';
import { removeElementPrevLevel } from '../view/remove-element';
import { storageAnswers } from './answers';
import { changeClass } from './change-class-for-elem';
import { clearInputValue } from './clear-input';
import { createLevel } from './tasks';
import { winGame } from './win-game';

export function corretAnswer(inputValue: string): void {
  const currentLevel = DataStorage.getValue('level');

  const nextLevel = (): string => (Number(currentLevel) < 9 ? `0${Number(currentLevel) + 1}` : '10');

  if (currentLevel) {
    const num = Number(currentLevel);
    const answer = storageAnswers[num - 1];

    if (inputValue !== answer) {
      const editorGame = document.querySelector('.editor');
      editorGame?.classList.add('shake');
      setTimeout(() => {
        editorGame?.classList.remove('shake');
      }, 500);
    }

    if (inputValue === answer) {
      clearInputValue();
      winGame();
      changeClass('task', 'remove', 'task_current', currentLevel);
      changeClass('task', 'add', 'task_complete', currentLevel);
      changeClass('task', 'add', 'task_current', nextLevel());
      removeElementPrevLevel();
      createHtmlEditor(nextLevel());
      highlightCode();
      DataStorage.setValue('level', nextLevel());
      createLevel(nextLevel());
    }
  }
}
