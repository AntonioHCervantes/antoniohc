import test from 'node:test';
import assert from 'node:assert/strict';
import ParallaxSection from '../ParallaxSection';

test('ParallaxSection component should be defined', () => {
  assert.equal(typeof ParallaxSection, 'function');
});
