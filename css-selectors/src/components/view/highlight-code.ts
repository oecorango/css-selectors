// eslint-disable-next-line import/no-extraneous-dependencies
import hljs from 'highlight.js';

export function highlightCode(): void {
  document.querySelectorAll('.code__html .html').forEach((el) => hljs.highlightElement(el as HTMLElement));
}
