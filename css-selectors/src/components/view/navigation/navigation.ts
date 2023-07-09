import './navigation.scss';
import { CreateElement } from '../../classes/Create-element';
import levelsTask from '../levels.json';

export function createNavigation(): void {
  const header = new CreateElement('body', 'aside', 'aside');
  const headerName = new CreateElement('.aside', 'h2', 'aside__head');
  const navigation = new CreateElement('.aside', 'div', 'navigation');
  const resetBtn = new CreateElement('.aside', 'button', 'reset-game');
  const helpBtn = new CreateElement('.aside', 'button', 'help-game');

  header.create();
  headerName.create('Levels');
  navigation.create();
  resetBtn.create('Reset game');
  helpBtn.create('Help me!');

  levelsTask.forEach((value) => {
    const levels = new CreateElement('.navigation', 'button', 'task');
    levels.create(value.level);
  });
}
