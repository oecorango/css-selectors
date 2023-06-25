import './navigation.scss';
import { CreateEltment } from '../Create-element';
import levelsTask from '../levels.json';

export function createNavigation(): void {
  const header = new CreateEltment('body', 'header', 'header');
  const headerName = new CreateEltment('.header', 'h2', 'header__head');
  const navigation = new CreateEltment('.header', 'div', 'navigation');
  const resetBtn = new CreateEltment('.header', 'button', 'reset-game');
  header.create();
  headerName.create('Levels');
  navigation.create();
  resetBtn.create('Reset game');

  levelsTask.forEach((value) => {
    const levels = new CreateEltment('.navigation', 'button', `task-${value.level}`, 'disabled', 'disabled');
    const complitedLevel = new CreateEltment(`.task-${value.level}`, 'span', 'checkmark');
    levels.create(value.level);
    complitedLevel.create();
  });
}
