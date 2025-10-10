import test from 'node:test';
import assert from 'node:assert/strict';
import Header from '../Header';

test('Header component should be defined', () => {
  assert.equal(typeof Header, 'function');
});
