import test from 'node:test';
import assert from 'node:assert/strict';
import Skills from '../Skills';

test('Skills component should be defined', () => {
  assert.equal(typeof Skills, 'function');
});
