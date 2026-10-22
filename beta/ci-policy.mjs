import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
try { const value = (await readFile('beta-ci.txt', 'utf8')).trim(); assert.equal(value, 'ci-green', 'beta-ci.txt must equal ci-green when present'); } catch (error) { if (error?.code !== 'ENOENT') throw error; }
console.log('beta CI policy passed');
