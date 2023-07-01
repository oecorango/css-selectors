export function removeElementPrevLevel(): void {
  const gameRender = document.querySelector('.current-task');
  while (gameRender?.firstChild) {
    gameRender.removeChild(gameRender.firstChild);
  }

  const codeHtmlRender = document.querySelector('.editor__content');
  while (codeHtmlRender?.firstChild) {
    codeHtmlRender.removeChild(codeHtmlRender.firstChild);
  }
}
