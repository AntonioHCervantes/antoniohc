import test from 'node:test';
import assert from 'node:assert/strict';
import About from '../About';

test('About component should be defined', () => {
  assert.equal(typeof About, 'function');
});
