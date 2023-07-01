import levelsTask from './levels.json';

export function getHtmlCode(levelNum: number): string {
  return levelsTask[levelNum].html;
}
