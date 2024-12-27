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
    // Create a temporary span with a single character
    const testSpan = document.createElement('span');
    testSpan.textContent = 'W'; // Use a wide character to ensure accuracy
    testSpan.style.fontFamily = getComputedStyle(this.terminalElement).fontFamily;
    testSpan.style.fontSize = getComputedStyle(this.terminalElement).fontSize;
    testSpan.style.visibility = 'hidden'; // Make it invisible
    document.body.appendChild(testSpan);

    // Get the width of the single character in pixels
    const widthCharacters = testSpan.offsetWidth;

    // Remove the test span
    document.body.removeChild(testSpan);

    // Calculate and return the terminalElement width in characters
    return Math.floor(this.widthPixels / widthCharacters);
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
