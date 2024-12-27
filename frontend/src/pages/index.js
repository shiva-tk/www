import * as wasm from 'www-wasm';
import { Terminal } from '../components/terminal.js'

const TERMINAL_ID = 'terminal';

async function runAnimation() {
  // Wait for necessary fonts to load, before calling out to WASM.
  await document.fonts.load('10px "Iosevka Web"');

  // Run the animation.
  const terminal = Terminal.fromId(TERMINAL_ID);
  wasm.perlin_animation(TERMINAL_ID, terminal.widthCharacters, terminal.heightCharacters);
}

runAnimation();
