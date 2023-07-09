import { NEW_GAME_LEVEL } from '../utils/constants';

export class DataStorage {
  private static items = new Map<string, string>();

  public static setValue(name: string, value: string): void {
    this.items.set(name, value);
  }

  public static getValue(name: string): string | undefined | null {
    if (this.items.has(name)) {
      return this.items.get(name);
    }
    return null;
  }

  public static setLocalStorage(name: string, value: string): void {
    window.addEventListener('beforeunload', () => localStorage.setItem(name, value));
  }

  public static getLocalStorage(name: string): string {
    const levels: string | null = localStorage.getItem(name);
    if (levels === null) return NEW_GAME_LEVEL;
    return levels;
  }
}
