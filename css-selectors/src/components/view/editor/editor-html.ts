import './editor-html.scss';
import { createElement } from '../../utils/create-element';
import { getHtmlCode } from '../get-html-code';
import { highlightCode } from '../highlight-code';
import { EventEmitter } from '../../classes/EventEmitter';

const htmlCodeColumn = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15';

export function createHtmlEditor(): void {
  createElement('.editor', 'div', 'editor__html');
  createElement('.editor__html', 'div', 'editor-html__header');
  createElement('.editor-html__header', 'div', 'editor__name', 'HTML Viewer');
  createElement('.editor-html__header', 'div', 'editor__value', 'table.html');

  createElement('.editor__html', 'div', 'editor__content');
  createElement('.editor__content', 'div', 'editor__str', htmlCodeColumn);

  const saveLevel = EventEmitter.getLocalStorage('level');
  createElement('.editor__content', 'div', 'editor__code', getHtmlCode(Number(saveLevel) - 1));

  highlightCode();
}
