import * as wasm from 'www-frontend';

class Terminal {
  constructor() {
    this.terminal = document.getElementById('terminal');
  }

  get widthPixels() {
    return this.terminal.offsetWidth
  }

  get widthCharacters() {
    // Create a temporary span with a single character
    const testSpan = document.createElement('span');
    testSpan.textContent = 'W'; // Use a wide character to ensure accuracy
    testSpan.style.fontFamily = getComputedStyle(this.terminal).fontFamily;
    testSpan.style.fontSize = getComputedStyle(this.terminal).fontSize;
    testSpan.style.visibility = 'hidden'; // Make it invisible
    document.body.appendChild(testSpan);

    // Get the width of the single character in pixels
    const widthCharacters = testSpan.offsetWidth;

    // Remove the test span
    document.body.removeChild(testSpan);

    // Calculate and return the terminal width in characters
    return Math.floor(this.widthPixels / widthCharacters);
  }

  get heightPixels() {
    return this.terminal.offsetHeight;
  }

  get heightCharacters() {
    // Create a temporary span with a single line of text
    const testSpan = document.createElement('span');
    testSpan.textContent = 'W'; // A single character to measure line height
    testSpan.style.fontFamily = getComputedStyle(this.terminal).fontFamily;
    testSpan.style.fontSize = getComputedStyle(this.terminal).fontSize;
    testSpan.style.visibility = 'hidden'; // Make it invisible

    document.body.appendChild(testSpan);

    // Get the line height of the character in pixels
    const heightCharacters = testSpan.offsetHeight;

    // Remove the test span
    document.body.removeChild(testSpan);

    // Calculate and return the terminal height in characters
    return Math.floor(this.heightPixels / heightCharacters);
  }

  printLine(line) {
    const span = document.createElement('span');
    span.innerHTML = line; // Allow HTML for bold characters
    terminal.appendChild(span);
  }
}

const t = new Terminal();
const w = t.widthCharacters;
const h = t.heightCharacters;

for (let i = 0; i < h; i++) {
  const l = "<b>I</b>".repeat(w);
  t.printLine(l);
}
