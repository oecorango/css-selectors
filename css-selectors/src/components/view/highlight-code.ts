import hljs from 'highlight.js';

export function highlightCode(): void {
  document.querySelectorAll<HTMLElement>('.code__html .html').forEach((el) => {
    hljs.highlightElement(el);
  });
}
