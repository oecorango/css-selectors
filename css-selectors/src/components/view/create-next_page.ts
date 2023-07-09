import { CODE_EDITOR_COLUMN } from '../utils/constants';
import { createElement } from '../utils/create-element';
import { getHtmlCode } from './get-html-code';

export function createHtmlEditor(num: string): void {
  createElement('.editor__content', 'div', 'editor__code', getHtmlCode(Number(num) - 1));
  createElement('.editor__content', 'div', 'editor__str', CODE_EDITOR_COLUMN);
}
