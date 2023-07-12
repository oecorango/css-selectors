import './game.scss';
import { createElement } from '../../utils/create-element';
import { createLinks } from '../create-links';
import { LINK_TO_GITHUB, LINK_TO_SCHOOL } from '../../utils/constants';

export function createGame(): void {
  createElement('body', 'main', ['main']);
  createElement('main', 'header', ['header']);
  createElement('main', 'div', ['current-task']);
  createElement('main', 'div', ['editor']);

  createElement('.header', 'h1', ['header__text'], 'CSS Selectors');
  createElement('.header', 'div', ['header__content']);

  createElement('.header__content', 'div', ['rs-school']);
  createElement('.header__content', 'div', ['github']);

  createLinks('.rs-school', LINK_TO_SCHOOL);
  createLinks('.github', LINK_TO_GITHUB);
}
