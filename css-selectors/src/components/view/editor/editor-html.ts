import './editor-html.scss';
import { CreateEltment } from '../../classes/Create-element';
import levelsTask from '../levels.json';

function getHtmlCode(levelNum: number): string {
  return levelsTask[levelNum].html;
}

export function createHtmlEditor(): void {
  const htmlEditor = new CreateEltment('.editor', 'div', 'editor__html');

  const htmlHeader = new CreateEltment('.editor__html', 'div', 'editor-html__header');
  const headerName = new CreateEltment('.editor-html__header', 'div', 'editor__name');
  const headerValue = new CreateEltment('.editor-html__header', 'div', 'editor__value');

  const editorContent = new CreateEltment('.editor__html', 'div', 'editor__content');
  const htmlStr = new CreateEltment('.editor__content', 'div', 'editor__str');
  const htmlCode = new CreateEltment('.editor__content', 'div', 'editor__code');

  htmlEditor.create();
  editorContent.create();
  htmlCode.create(getHtmlCode(0));
  htmlStr.create('1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15');
  htmlHeader.create();
  headerName.create('HTML Viewer');
  headerValue.create('table.html');
}
