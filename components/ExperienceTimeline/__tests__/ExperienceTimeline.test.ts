import test from 'node:test';
import assert from 'node:assert/strict';
import ExperienceTimeline from '../ExperienceTimeline';

test('ExperienceTimeline component should be defined', () => {
  assert.equal(typeof ExperienceTimeline, 'function');
});
