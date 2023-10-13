import './navigation.scss';
import { createElement } from '../../utils/create-element';
import levelsTask from '../levels.json';

export function createNavigation(): void {
  createElement('body', 'aside', ['aside']);
  createElement('.aside', 'h2', ['aside__head'], 'Levels');
  createElement('.aside', 'div', ['navigation']);
  createElement('.aside', 'button', ['reset-game'], 'Reset game');
  createElement('.aside', 'button', ['help-game'], 'Help me!');

  levelsTask.forEach((value) => {
    createElement('.navigation', 'button', ['task'], value.level);
  });
}
