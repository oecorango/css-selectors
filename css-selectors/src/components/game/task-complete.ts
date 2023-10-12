import { DataStorage } from '../classes/Storage';
import { createHtmlEditor } from '../view/create-next-html-editor';
import { highlightCode } from '../view/highlight-code';
import { removeElementPrevLevel } from '../view/remove-element';
import { changeClass } from './change-class-for-elem';
import { clearInputValue } from './clear-input';
import { nextLevel } from './next-level';
import { createLevel } from './create-level';
import { winGame } from './win-game';
import { ANSWER_MAP } from '../utils/constants';
import { nextLevelNum } from './next-level-number';

export function correctAnswer(inputValue: string): void {
  const currentLevel = DataStorage.getValue('level');

  if (currentLevel) {
    const answer = ANSWER_MAP[currentLevel];

    if (inputValue !== answer) {
      const editorGame = document.querySelector('.editor');
      editorGame?.classList.add('shake');
      setTimeout(() => {
        editorGame?.classList.remove('shake');
      }, 500);
    }

    if (inputValue === answer) {
      clearInputValue();
      changeClass('task', 'remove', 'task_current', currentLevel);
      changeClass('task', 'add', 'task_complete', currentLevel);
      changeClass('task', 'add', 'task_current', nextLevel());
      winGame();
      removeElementPrevLevel();
      createHtmlEditor(nextLevelNum());
      highlightCode();
      DataStorage.setValue('level', nextLevel());
      createLevel(nextLevel());
    }
  }
}
