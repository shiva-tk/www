import * as wasm from 'www-wasm';
import { Terminal } from '../components/terminal.js'

const TERMINAL_ID = 'terminal';

// How much of the noise field one CSS pixel of banner covers. This is the zoom
// control: lower spreads each blob over more pixels, giving longer, smoother
// gradients; higher packs more detail into the same band. It's defined per
// pixel rather than per character so that the field isn't distorted by the
// character cell being about twice as tall as it is wide — the two steps below
// divide it back out.
const NOISE_PER_PIXEL = 0.0075;

async function runAnimation() {
  // The grid is measured in character cells, so the real font has to be in
  // place before measuring — otherwise the fallback monospace's metrics decide
  // the row and column count. This asked for "Iosevka Web", which the page
  // doesn't load, so it always resolved against the fallback.
  await document.fonts.load('bold 10px "Inconsolata"');
  await document.fonts.ready;

  // Run the animation.
  const terminal = Terminal.fromId(TERMINAL_ID);
  wasm.perlin_animation(
    TERMINAL_ID,
    terminal.widthCharacters,
    terminal.heightCharacters,
    terminal.cellHeight * NOISE_PER_PIXEL,
    terminal.cellWidth * NOISE_PER_PIXEL,
  );
}

runAnimation();
