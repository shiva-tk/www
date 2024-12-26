import * as wasm from "www-frontend";

const terminal = document.getElementById('terminal');

function getTerminalWidthInCharacters(terminalElement) {
  // Get the width of the terminal in pixels
  const terminalWidth = terminalElement.offsetWidth;

  // Create a temporary span with a single character
  const testSpan = document.createElement('span');
  testSpan.textContent = 'W'; // Use a wide character to ensure accuracy
  testSpan.style.fontFamily = getComputedStyle(terminalElement).fontFamily;
  testSpan.style.fontSize = getComputedStyle(terminalElement).fontSize;
  testSpan.style.visibility = 'hidden'; // Make it invisible
  document.body.appendChild(testSpan);

  // Get the width of the single character in pixels
  const charWidth = testSpan.offsetWidth;

  // Remove the test span
  document.body.removeChild(testSpan);

  // Calculate and return the terminal width in characters
  return Math.floor(terminalWidth / charWidth) - 1;
}

function getTerminalHeightInCharacters(terminalElement) {
  // Get the height of the terminal in pixels
  const terminalHeight = terminalElement.offsetHeight;

  // Create a temporary span with a single line of text
  const testSpan = document.createElement('span');
  testSpan.textContent = 'W'; // A single character to measure line height
  testSpan.style.fontFamily = getComputedStyle(terminalElement).fontFamily;
  testSpan.style.fontSize = getComputedStyle(terminalElement).fontSize;
  testSpan.style.visibility = 'hidden'; // Make it invisible

  document.body.appendChild(testSpan);

  let height = 0;

  // Get the line height of the character in pixels
  const charHeight = testSpan.offsetHeight;

  // Remove the test span
  document.body.removeChild(testSpan);

  // Calculate and return the terminal height in characters
  return Math.floor(terminalHeight / charHeight) - 1;
}

// Function to append text to the terminal
function writeToTerminal(text) {
    // Create a span element for the text
    const span = document.createElement('span');
    span.innerHTML = text; // Allow HTML for bold characters
    terminal.appendChild(span);
}

const terminalWidth = getTerminalWidthInCharacters(terminal);
const terminalHeight = getTerminalHeightInCharacters(terminal);
for (let i = 0; i < terminalHeight; i++) {
  writeToTerminal('<b>I</b>'.repeat(terminalWidth / 2) + 'I'.repeat(terminalWidth / 2));
}
