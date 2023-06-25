import { createNavigation } from './navigation/navigation';
import { createGame } from './game/game';
import { createHtmlEditor } from './editor/editor-html';
import { createCssEditor } from './editor/editor-css';

export function createPage(): void {
  createNavigation();
  createGame();
  createCssEditor();
  createHtmlEditor();
}
