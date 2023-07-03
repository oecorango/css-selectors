export function createLinks(name: string, url: string): void {
  const container = document.querySelector(name);
  if (container) {
    const link = document.createElement('a');
    link.href = url;

    container.append(link);
  }
}
