import { nav } from './navigation/navigation';
import { main, header, currentTask, editor, footer } from './game/game';
import { createHtmlEditor } from './editor/editor-html';
import { createCssEditor } from './editor/editor-css';

export function createPage(): void {
  nav.create();
  main.create();
  header.create();
  currentTask.create();
  editor.create();
  createCssEditor();
  createHtmlEditor();
  footer.create();
}
