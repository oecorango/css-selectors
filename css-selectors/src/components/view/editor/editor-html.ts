import './editor-html.scss';
import { createElement } from '../../utils/create-element';
import { getHtmlCode } from '../get-html-code';
import { highlightCode } from '../highlight-code';
import { DataStorage } from '../../classes/Storage';
import { CODE_EDITOR_COLUMN } from '../../utils/constants';

export function createHtmlEditor(): void {
  createElement('.editor', 'div', 'editor__html');
  createElement('.editor__html', 'div', 'editor-html__header');
  createElement('.editor-html__header', 'div', 'editor__name', 'HTML Viewer');
  createElement('.editor-html__header', 'div', 'editor__value', 'table.html');

  createElement('.editor__html', 'div', 'editor__content');
  createElement('.editor__content', 'div', 'editor__str', CODE_EDITOR_COLUMN);

  const saveLevel = DataStorage.getLocalStorage('level');
  createElement('.editor__content', 'div', 'editor__code', getHtmlCode(Number(saveLevel) - 1));

  highlightCode();
}
