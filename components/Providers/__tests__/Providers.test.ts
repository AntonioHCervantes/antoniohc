import test from 'node:test';
import assert from 'node:assert/strict';
import Providers from '../Providers';

test('Providers component should be defined', () => {
  assert.equal(typeof Providers, 'function');
});
