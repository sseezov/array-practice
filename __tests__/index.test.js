import test from 'node:test';
import assert from 'assert/strict';

import { countAverage, alphaOmega, fill, fromPairs, intersection } from '../index.js'

test('task-1', () => {
    assert.strictEqual(countAverage([5, 7, 9, 3, 2]), 5.2);
});
test('task-2', () => {
    assert.ok(alphaOmega([5, 7, 9, 3, 2]), [5, 2]);
    assert.ok(alphaOmega([4, 7, 9, 3, 2]), [4, 2]);
});
test('task-3', () => {
    assert.ok(fill(4, 'someString'), ['someString', 'someString', 'someString', 'someString']);
    assert.ok(fill(2, ['someString']), [['someString'], ['someString']]);
});
test('task-4', () => {
    assert.ok(fromPairs([['a', 1], ['b', 2]]), { 'a': 1, 'b': 2 });
    assert.ok(fromPairs([['someString', [2, 3]], ['b', 2]]), { 'someString': [2, 3], 'b': 2 });
});
test('task-5', () => {
    assert.ok(intersection([1, 2], [2, 3]), [2]);
    assert.ok(intersection(['b', 'e', 'c'], ['b', 'b', 'e']), ['b', 'e']);
});