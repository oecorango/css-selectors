import './game.scss';
import { CreateEltment } from '../../classes/Create-element';

export function createGame(): void {
  const main = new CreateEltment('body', 'main', 'main');
  const header = new CreateEltment('main', 'header', 'header');
  const currentTask = new CreateEltment('main', 'div', 'current-task');
  const editor = new CreateEltment('main', 'div', 'editor');

  main.create();
  header.create();
  currentTask.create();
  editor.create();
}
