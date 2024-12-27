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

  get widthCharacters() {
    // Get the terminal element
    const terminal = document.getElementById("terminal");

    if (!terminal) {
        console.error("Terminal element not found.");
        return null;
    }

    // Ensure the terminal spans the full page width
    terminal.style.width = "100%";

    // Get the computed style of the terminal
    const style = window.getComputedStyle(terminal);

    // Get the width of the terminal in pixels, accounting for box-sizing
    const terminalWidth = terminal.clientWidth;

    // Create a temporary span element to measure the width of a single character
    const tempSpan = document.createElement("span");
    tempSpan.textContent = "M"; // Use 'M' as it typically has a consistent width in monospaced fonts
    tempSpan.style.fontFamily = style.fontFamily;
    tempSpan.style.fontSize = style.fontSize;
    tempSpan.style.visibility = "hidden"; // Make it invisible
    tempSpan.style.position = "absolute"; // Avoid layout interference
    document.body.appendChild(tempSpan);

    // Get the width of the single character in pixels
    const charWidth = tempSpan.offsetWidth;

    // Remove the temporary span from the document
    document.body.removeChild(tempSpan);

    // Calculate the number of characters that fit in the terminal
    const terminalWidthInChars = Math.floor(terminalWidth / charWidth);

    return terminalWidthInChars;
  }

  get heightPixels() {
    return this.terminalElement.offsetHeight;
  }

  get heightCharacters() {
    // Create a temporary span with a single line of text
    const testSpan = document.createElement('span');
    testSpan.textContent = 'W'; // A single character to measure line height
    testSpan.style.fontFamily = getComputedStyle(this.terminalElement).fontFamily;
    testSpan.style.fontSize = getComputedStyle(this.terminalElement).fontSize;
    testSpan.style.visibility = 'hidden'; // Make it invisible

    document.body.appendChild(testSpan);

    // Get the line height of the character in pixels
    const heightCharacters = testSpan.offsetHeight;

    // Remove the test span
    document.body.removeChild(testSpan);

    // Calculate and return the terminal height in characters
    return Math.floor(this.heightPixels / heightCharacters);
  }

  print(text) {
    this.terminalElement.textContent = text;
  }

  clear() {
    this.terminalElement.textContent = '';
  }
}
