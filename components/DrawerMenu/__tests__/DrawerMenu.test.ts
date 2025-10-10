import test from 'node:test';
import assert from 'node:assert/strict';
import DrawerMenu from '../DrawerMenu';

test('DrawerMenu component should be defined', () => {
  assert.equal(typeof DrawerMenu, 'function');
});
