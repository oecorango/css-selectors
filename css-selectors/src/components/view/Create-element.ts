export class CreateEltment {
  private parent: string;

  private tag: string;

  private name: string;

  constructor(parent: string, tag: string, name: string) {
    this.parent = parent;
    this.tag = tag;
    this.name = name;
  }

  public create(code?: string): void {
    const parent = document.querySelector(this.parent);

    const createElem = document.createElement(this.tag);
    createElem.classList.add(this.name);
    if (code) {
      createElem.innerHTML = code;
    }

    parent?.append(createElem);
  }
}
