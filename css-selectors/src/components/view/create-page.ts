import { createNavigation } from './navigation/navigation';
import { main, about, currentTask, editor, footer } from './game/game';
import { createHtmlEditor } from './editor/editor-html';
import { createCssEditor } from './editor/editor-css';

export function createPage(): void {
  createNavigation();
  main.create();
  about.create();
  currentTask.create();
  editor.create();
  createCssEditor();
  createHtmlEditor();
  footer.create();
}
