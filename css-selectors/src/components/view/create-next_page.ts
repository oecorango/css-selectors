import { CreateEltment } from '../classes/Create-element';
import { getHtmlCode } from './get-html-code';

export function createHtmlEditor(num: string): void {
  const htmlStr = new CreateEltment('.editor__content', 'div', 'editor__str');
  const htmlCode = new CreateEltment('.editor__content', 'div', 'editor__code');

  htmlCode.create(getHtmlCode(Number(num) - 1));
  htmlStr.create('1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15');
}
