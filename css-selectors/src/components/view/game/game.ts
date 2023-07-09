import './game.scss';
import { CreateElement } from '../../classes/Create-element';
import { createLinks } from '../create-links';

export function createGame(): void {
  const main = new CreateElement('body', 'main', 'main');
  const header = new CreateElement('main', 'header', 'header');
  const currentTask = new CreateElement('main', 'div', 'current-task');
  const editor = new CreateElement('main', 'div', 'editor');

  const headerText = new CreateElement('.header', 'h1', 'header__text');
  const headerContent = new CreateElement('.header', 'div', 'header__content');

  const headerRsSchoolImg = new CreateElement('.header__content', 'div', 'rs-school');
  const headerGitImg = new CreateElement('.header__content', 'div', 'github');

  main.create();
  header.create();
  currentTask.create();
  editor.create();
  headerText.create('CSS Selectors');
  headerContent.create();
  headerRsSchoolImg.create();
  headerGitImg.create();

  createLinks('.rs-school', 'https://rs.school/js/');
  createLinks('.github', 'https://github.com/oecorango/');
}
