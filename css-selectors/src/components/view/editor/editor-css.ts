import './editor-css.scss';
import { createElement } from '../../utils/create-element';
import { CODE_EDITOR_COLUMN, TEXT_CSS_EDITOR } from '../../utils/constants';

export function createCssEditor(): void {
  createElement('.editor', 'div', ['editor__css']);

  createElement('.editor__css', 'div', ['editor-css__header']);
  createElement('.editor-css__header', 'div', ['editor__name'], 'CSS Editor');
  createElement('.editor-css__header', 'div', ['editor__value'], 'style.css');

  createElement('.editor__css', 'div', ['editor-css__content']);
  createElement('.editor-css__content', 'div', ['editor-css__str'], CODE_EDITOR_COLUMN);
  createElement('.editor-css__content', 'div', ['editor-css__code']);
  createElement('.editor-css__code', 'input', ['input-css__code']);
  createElement('.editor-css__code', 'button', ['button-css__code'], 'Enter');
  createElement('.editor-css__code', 'p', ['css__text'], TEXT_CSS_EDITOR);
}
