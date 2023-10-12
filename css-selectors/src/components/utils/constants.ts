import { Level } from '../types/types';
import {
  createLevel01,
  createLevel02,
  createLevel03,
  createLevel04,
  createLevel05,
  createLevel06,
  createLevel07,
  createLevel08,
  createLevel09,
  createLevel10,
} from '../game/level-for-game';

const LEVEL_MAP: Record<Level, () => void> = {
  '01': createLevel01,
  '02': createLevel02,
  '03': createLevel03,
  '04': createLevel04,
  '05': createLevel05,
  '06': createLevel06,
  '07': createLevel07,
  '08': createLevel08,
  '09': createLevel09,
  '10': createLevel10,
};

const ANSWER_MAP: Record<Level, string> = {
  '01': 'car',
  '02': 'vagon',
  '03': '#music',
  '04': 'vagon horse',
  '05': '#music masyanya',
  '06': '.small',
  '07': 'mice.small',
  '08': 'vagon > masyanya .small',
  '09': 'vagon, car',
  '10': '*',
};

const NEW_GAME_LEVEL: Level = '01';
const ALL_LEVELS: Level[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const ALL_LEVELS_COUNT = ALL_LEVELS.length;
const CODE_EDITOR_COLUMN = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15';
const TEXT_CSS_EDITOR =
  '{<br>&nbsp/* Styles would go here. */<br>}<br><br>/*<br>&nbspType a number to skip to a level.<br>&nbspEx → "5" for level 5<br>*/';

const LINK_TO_SCHOOL = 'https://rs.school/js/';
const LINK_TO_GITHUB = 'https://github.com/oecorango/';

export {
  NEW_GAME_LEVEL,
  ALL_LEVELS,
  ALL_LEVELS_COUNT,
  CODE_EDITOR_COLUMN,
  LEVEL_MAP,
  ANSWER_MAP,
  TEXT_CSS_EDITOR,
  LINK_TO_SCHOOL,
  LINK_TO_GITHUB,
};
