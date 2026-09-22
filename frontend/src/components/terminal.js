export class Terminal {

  static fromId(id) {
    const terminalElement = document.getElementById(id);
    return new Terminal(terminalElement)
  }

  constructor(terminalElement) {
    this.terminalElement = terminalElement;
  }

  get widthPixels() {
    return this.terminalElement.offsetWidth
  }

  get heightPixels() {
    return this.terminalElement.offsetHeight;
  }

  /* Width of one character cell, measured in the element's own font. The
     weight matters: the terminal is set in bold, and bold Inconsolata is
     wider than regular, so measuring without it overestimates how many
     columns fit and the grid overflows. */
  get cellWidth() {
    const style = window.getComputedStyle(this.terminalElement);

    const probe = document.createElement('span');
    probe.textContent = 'M';
    probe.style.font = style.font;
    probe.style.fontFamily = style.fontFamily;
    probe.style.fontSize = style.fontSize;
    probe.style.fontWeight = style.fontWeight;
    probe.style.letterSpacing = style.letterSpacing;
    probe.style.whiteSpace = 'pre';
    probe.style.visibility = 'hidden';
    probe.style.position = 'absolute';

    document.body.appendChild(probe);
    const width = probe.getBoundingClientRect().width;
    document.body.removeChild(probe);

    return width;
  }

  /* Height of one character cell. This has to come from the element's
     resolved line-height rather than a probe span's offsetHeight: the span
     lays out at line-height `normal` regardless of what the terminal uses, so
     any explicit line-height made the row count wrong and the grid stopped
     short of filling its box. */
  get cellHeight() {
    const { lineHeight, fontSize } = window.getComputedStyle(this.terminalElement);

    const resolved = parseFloat(lineHeight);
    if (!Number.isNaN(resolved)) {
      return resolved;
    }

    // line-height: normal doesn't resolve to a length, so approximate it.
    return parseFloat(fontSize) * 1.2;
  }

  get widthCharacters() {
    return Math.max(1, Math.floor(this.widthPixels / this.cellWidth));
  }

  get heightCharacters() {
    return Math.max(1, Math.floor(this.heightPixels / this.cellHeight));
  }

  print(text) {
    this.terminalElement.textContent = text;
  }

  clear() {
    this.terminalElement.textContent = '';
  }
}
