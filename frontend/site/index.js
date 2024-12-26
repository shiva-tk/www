import * as wasm from 'www-frontend';
import { Terminal } from './terminal.js'

const t = Terminal.fromId('terminal');
const w = t.widthCharacters;
const h = t.heightCharacters;

for (let i = 0; i < h; i++) {
  const l = "<b>I</b>".repeat(w);
  t.printLine(l);
}
