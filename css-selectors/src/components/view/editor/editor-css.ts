import './editor-css.scss';
import { createElement } from '../../utils/create-element';

const cssCdeColunm = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15';

export function createCssEditor(): void {
  createElement('.editor', 'div', 'editor__css');

  createElement('.editor__css', 'div', 'editor-css__header');
  createElement('.editor-css__header', 'div', 'editor__name', 'CSS Editor');
  createElement('.editor-css__header', 'div', 'editor__value', 'style.css');

  createElement('.editor__css', 'div', 'editor-css__content');
  createElement('.editor-css__content', 'div', 'editor-css__str', cssCdeColunm);
  createElement('.editor-css__content', 'div', 'editor-css__code');
  createElement('.editor-css__code', 'input', 'input-css__code');
  createElement('.editor-css__code', 'button', 'button-css__code', 'Enter');
  createElement(
    '.editor-css__code',
    'p',
    'css__text',
    '{<br>&nbsp/* Styles would go here. */<br>}<br><br>/*<br>&nbspType a number to skip to a level.<br>&nbspEx → "5" for level 5<br>*/',
  );
}
