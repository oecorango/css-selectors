export class CreateEltment {
  private parent: string;

  private tag: string;

  private name: string;

  private attributeName?: string;

  private attributeValue?: string;

  constructor(parent: string, tag: string, name: string, attributeName?: string, attributeValue?: string) {
    this.parent = parent;
    this.tag = tag;
    this.name = name;
    this.attributeName = attributeName;
    this.attributeValue = attributeValue;
  }

  public create(code?: string): void {
    const parent = document.querySelector(this.parent);

    const createElem = document.createElement(this.tag);
    createElem.classList.add(this.name);
    if (code) {
      createElem.innerHTML = code;
    }
    // if (this.attributeName && this.attributeValue) createElem.setAttribute(this.attributeName, this.attributeValue);

    parent?.append(createElem);
  }

  // public getAttibute() {

  // }
}
