export class CreateElement {
  private parent: string;

  private tag: string;

  private name: string;

  private attribute: string | undefined;

  constructor(parent: string, tag: string, name: string, attribute?: string) {
    this.parent = parent;
    this.tag = tag;
    this.name = name;
    this.attribute = attribute;
  }

  public create(code?: string): void {
    const parent = document.querySelector(this.parent);
    const createElem = document.createElement(this.tag);

    if (this.attribute) {
      createElem.setAttribute('class', this.attribute);
    }

    createElem.classList.add(this.name);
    if (code) {
      createElem.innerHTML = code;
    }

    parent?.append(createElem);
  }

  public getElement(): NodeListOf<Element> {
    const elem = document.querySelectorAll(`.${this.name}`);
    return elem;
  }
}
