import './game.scss';
import { CreateEltment } from '../../classes/Create-element';

export function createGame(): void {
  const main = new CreateEltment('body', 'main', 'main');
  const about = new CreateEltment('main', 'div', 'about');
  const currentTask = new CreateEltment('main', 'div', 'current-task');
  const editor = new CreateEltment('main', 'div', 'editor');

  main.create();
  about.create();
  currentTask.create();
  editor.create();
}
