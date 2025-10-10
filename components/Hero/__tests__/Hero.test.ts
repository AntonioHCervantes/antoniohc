import test from 'node:test';
import assert from 'node:assert/strict';
import Hero from '../Hero';

test('Hero component should be defined', () => {
  assert.equal(typeof Hero, 'function');
});
