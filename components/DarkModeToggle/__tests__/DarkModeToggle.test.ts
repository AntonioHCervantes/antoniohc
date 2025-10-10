import test from 'node:test';
import assert from 'node:assert/strict';
import DarkModeToggle from '../DarkModeToggle';

test('DarkModeToggle component should be defined', () => {
  assert.equal(typeof DarkModeToggle, 'function');
});
