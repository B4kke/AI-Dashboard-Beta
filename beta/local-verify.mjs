import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
assert.equal((await readFile(new URL('./baseline.txt', import.meta.url), 'utf8')).trim(), 'ready');
console.log('beta local verification passed');
