// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: the meme was made by the agent, posted from a
// public X account with make.fun and the play code in its text, and POST.json at
// this repository's root names the post's address. All this program does is
// hand POST.json to the gate, copying it into the output directory the grader
// reads. Nothing it writes is judged; the house reads the post from X itself.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

// Fail loudly on a malformed POST.json instead of handing the gate a file it
// cannot read: it must parse as JSON and carry a url string.
try {
  const parsed = JSON.parse(readFileSync(source, 'utf8')) as unknown;
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('POST.json must be a JSON object with a url string');
  }
} catch (error) {
  console.error(`POST.json in ${botDir} is not usable: ${(error as Error).message}`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
