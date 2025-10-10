import test from 'node:test';
import assert from 'node:assert/strict';
import ProjectsSection from '../ProjectsSection';

test('ProjectsSection component should be defined', () => {
  assert.equal(typeof ProjectsSection, 'function');
});
