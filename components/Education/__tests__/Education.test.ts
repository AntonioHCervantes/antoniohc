import test from 'node:test';
import assert from 'node:assert/strict';
import Education from '../Education';

test('Education component should be defined', () => {
  assert.equal(typeof Education, 'function');
});
