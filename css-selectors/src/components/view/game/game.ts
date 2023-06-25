import './game.scss';
import { CreateEltment } from '../Create-element';

export const main = new CreateEltment('body', 'main', 'main');
export const about = new CreateEltment('main', 'div', 'about');
export const currentTask = new CreateEltment('main', 'div', 'current-task');
export const editor = new CreateEltment('main', 'div', 'editor');
export const footer = new CreateEltment('main', 'footer', 'footer');
