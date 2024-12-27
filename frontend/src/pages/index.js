import * as wasm from 'www-wasm';
import { Terminal } from '../components/terminal.js'

const TERMINAL_ID = 'terminal';

const terminal = Terminal.fromId(TERMINAL_ID);
console.log(terminal);

wasm.perlin_animation(TERMINAL_ID, terminal.widthCharacters, terminal.heightCharacters);
