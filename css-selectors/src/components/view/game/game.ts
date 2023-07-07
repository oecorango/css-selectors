import './game.scss';
import { CreateEltment } from '../../classes/Create-element';
import { createLinks } from '../create-links';

export function createGame(): void {
  const main = new CreateEltment('body', 'main', 'main');
  const header = new CreateEltment('main', 'header', 'header');
  const currentTask = new CreateEltment('main', 'div', 'current-task');
  const editor = new CreateEltment('main', 'div', 'editor');

  const headerText = new CreateEltment('.header', 'h1', 'header__text');
  const headerContent = new CreateEltment('.header', 'div', 'header__content');

  const headerRsSchollImg = new CreateEltment('.header__content', 'div', 'rs-school');
  const headerGitImg = new CreateEltment('.header__content', 'div', 'github');

  main.create();
  header.create();
  currentTask.create();
  editor.create();
  headerText.create('CSS Seltctors');
  headerContent.create();
  headerRsSchollImg.create();
  headerGitImg.create();

  createLinks('.rs-school', 'https://rs.school/js/');
  createLinks('.github', 'https://github.com/oecorango/');
}
