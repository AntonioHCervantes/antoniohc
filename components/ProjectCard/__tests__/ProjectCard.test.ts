import test from 'node:test';
import assert from 'node:assert/strict';
import ProjectCard from '../ProjectCard';

test('ProjectCard component should be defined', () => {
  assert.equal(typeof ProjectCard, 'function');
});
