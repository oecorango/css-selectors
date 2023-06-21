import { nav } from './navigation/navigation';
import { main, header, currentTask, editor, footer } from './game/game';
import { htmlEditor } from './editor/editor-html';
import { cssEditor } from './editor/editor-css';
import levelsTask from './levels.json';

function getHtmlCode(levelNum: number): string {
  return levelsTask[levelNum].level;
}

export function createPage(): void {
  nav.create();
  main.create();
  header.create();
  currentTask.create();
  editor.create();
  cssEditor.create();
  htmlEditor.create(getHtmlCode(9));
  footer.create();
}
