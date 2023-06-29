import './editor-css.scss';
import { CreateEltment } from '../../classes/Create-element';

export function createCssEditor(): void {
  const cssEditor = new CreateEltment('.editor', 'div', 'editor__css');

  const cssHeader = new CreateEltment('.editor__css', 'div', 'editor-css__header');
  const headerName = new CreateEltment('.editor-css__header', 'div', 'editor__name');
  const headerValue = new CreateEltment('.editor-css__header', 'div', 'editor__value');

  const editorContent = new CreateEltment('.editor__css', 'div', 'editor-css__content');
  const cssStr = new CreateEltment('.editor-css__content', 'div', 'editor-css__str');
  const cssCode = new CreateEltment('.editor-css__content', 'div', 'editor-css__code');
  const cssInput = new CreateEltment('.editor-css__code', 'input', 'input-css__code');
  const cssBtn = new CreateEltment('.editor-css__code', 'button', 'button-css__code');
  const cssText = new CreateEltment('.editor-css__code', 'p', 'css__text');

  cssEditor.create();
  cssHeader.create();
  headerName.create('CSS Editor');
  headerValue.create('style.css');

  editorContent.create();
  cssStr.create('1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15');
  cssCode.create();
  cssInput.create();
  cssBtn.create('Enter');
  cssText.create(
    '{<br>&nbsp/* Styles would go here. */<br>}<br><br>/*<br>&nbspType a number to skip to a level.<br>&nbspEx → "5" for level 5<br>*/',
  );
}
