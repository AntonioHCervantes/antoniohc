import test from 'node:test';
import assert from 'node:assert/strict';
import AnimatedBackground from '../AnimatedBackground';

test('AnimatedBackground component should be defined', () => {
  assert.equal(typeof AnimatedBackground, 'function');
});
