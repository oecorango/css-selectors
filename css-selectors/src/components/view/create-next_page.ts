import { createElement } from '../utils/create-element';
import { getHtmlCode } from './get-html-code';

const htmlCodeColunm = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15';

export function createHtmlEditor(num: string): void {
  createElement('.editor__content', 'div', 'editor__code', getHtmlCode(Number(num) - 1));
  createElement('.editor__content', 'div', 'editor__str', htmlCodeColunm);
}
