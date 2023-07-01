export class DataStorage {
  public static items = new Map<string, string>();

  public static setValue(name: string, value: string): void {
    this.items.set(name, value);
  }

  public static getValue(name: string): string | undefined | null {
    if (this.items.has(name)) {
      return this.items.get(name);
    }
    return null;
  }
}
