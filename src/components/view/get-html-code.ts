import levelsTask from './levels.json';

export function getHtmlCode(levelNum: string): string {
  return levelsTask[Number(levelNum) - 1].html;
}
