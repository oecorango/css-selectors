import './game.scss';
import { CreateEltment } from '../Create-element';

export const main = new CreateEltment('body', 'main', 'main');
export const header = new CreateEltment('main', 'header', 'header');
export const currentTask = new CreateEltment('main', 'div', 'current-task');
export const editor = new CreateEltment('main', 'div', 'editor');
export const footer = new CreateEltment('main', 'footer', 'footer');
