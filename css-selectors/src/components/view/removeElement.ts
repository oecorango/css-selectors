export function removeElementPrevLevel(): void {
  const gameRender = document.querySelector('.current-task');
  while (gameRender?.firstChild) {
    gameRender.removeChild(gameRender.firstChild);
  }
}
