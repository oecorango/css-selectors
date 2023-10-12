import { Level } from '../types/types';
import { NEW_GAME_LEVEL } from '../utils/constants';

export class DataStorage {
  private static items = new Map<string, Level>();

  public static setValue(name: string, value: Level): void {
    this.items.set(name, value);
  }

  public static getValue(name: Level | string): Level | undefined | null {
    if (this.items.has(name)) {
      return this.items.get(name);
    }
    return null;
  }

  public static setLocalStorage(name: string, value: Level | string): void {
    window.addEventListener('beforeunload', () => localStorage.setItem(name, value));
  }

  public static getLocalStorage(name: string): string | null {
    const levels = localStorage.getItem(name);
    if (levels === null) return NEW_GAME_LEVEL;
    return levels;
  }
}
