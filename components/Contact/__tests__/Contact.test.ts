import test from 'node:test';
import assert from 'node:assert/strict';
import Contact from '../Contact';

test('Contact component should be defined', () => {
  assert.equal(typeof Contact, 'function');
});
