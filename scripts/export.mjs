// Makes a clean copy of only the files the website needs, in the folder "publish".
// Run with:  npm run export   — then upload or drag the "publish" folder to the host.
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'publish');

// leave out notes, system files and the original font files (the page uses fonts.css)
const wanted = src =>
  !/(\.DS_Store|README\.txt)$/.test(src) && !src.includes(join('assets', 'fonts') + sep) && !src.endsWith(join('assets', 'fonts'));

rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const item of ['index.html', 'content.js', 'assets']) {
  cpSync(join(root, item), join(out, item), { recursive: true, filter: wanted });
}
console.log('Ready to publish: ' + out);
