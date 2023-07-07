import './navigation.scss';
import { CreateEltment } from '../../classes/Create-element';
import levelsTask from '../levels.json';

export function createNavigation(): void {
  const header = new CreateEltment('body', 'aside', 'aside');
  const headerName = new CreateEltment('.aside', 'h2', 'aside__head');
  const navigation = new CreateEltment('.aside', 'div', 'navigation');
  const resetBtn = new CreateEltment('.aside', 'button', 'reset-game');
  const helpBtn = new CreateEltment('.aside', 'button', 'help-game');

  header.create();
  headerName.create('Levels');
  navigation.create();
  resetBtn.create('Reset game');
  helpBtn.create('Help me!');

  levelsTask.forEach((value) => {
    const levels = new CreateEltment('.navigation', 'button', 'task');
    levels.create(value.level);
  });
}
