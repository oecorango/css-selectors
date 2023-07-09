import './editor-html.scss';
import { CreateElement } from '../../classes/Create-element';
import { getHtmlCode } from '../get-html-code';
import { highlightCode } from '../highlight-code';
import { EventEmitter } from '../../classes/EventEmitter';

const htmlCodeColumn = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15';

export function createHtmlEditor(): void {
  const htmlEditor = new CreateElement('.editor', 'div', 'editor__html');

  const htmlHeader = new CreateElement('.editor__html', 'div', 'editor-html__header');
  const headerName = new CreateElement('.editor-html__header', 'div', 'editor__name');
  const headerValue = new CreateElement('.editor-html__header', 'div', 'editor__value');

  const editorContent = new CreateElement('.editor__html', 'div', 'editor__content');
  const htmlStr = new CreateElement('.editor__content', 'div', 'editor__str');
  const htmlCode = new CreateElement('.editor__content', 'div', 'editor__code');

  const saveLevel = EventEmitter.getLocalStorage('level');

  htmlEditor.create();
  editorContent.create();
  htmlCode.create(getHtmlCode(Number(saveLevel) - 1));
  highlightCode();
  htmlStr.create(htmlCodeColumn);
  htmlHeader.create();
  headerName.create('HTML Viewer');
  headerValue.create('table.html');
}
