import test from 'node:test';
import assert from 'assert/strict';

import {
  countAverage,
  alphaOmega,
  fill,
  fromPairs,
  intersection,
} from '../index.js';

describe('task1', () => {
  it('should count', () => {
    expect(countAverage([5, 7, 9, 3, 2])).toEqual(5.2);
  });
  it('should count', () => {
    expect(countAverage([4, 7, 9, 3, 2])).toEqual(5);
  });
  it('should not count', () => {
    expect(countAverage()).toBeUndefined();
  });
});

describe('task2', () => {
  it('should find', () => {
    expect(alphaOmega([5, 7, 9, 3, 2])).toEqual([5, 2]);
  });
  it('should find', () => {
    expect(alphaOmega([4, 7, 9, 3, 2])).toEqual([4, 2]);
  });
  it('should not find', () => {
    expect(alphaOmega()).toBeUndefined();
  });
});

describe('task3', () => {
  it('should fill', () => {
    expect(fill(4, 'someString')).toEqual([
      'someString',
      'someString',
      'someString',
      'someString',
    ]);
  });
  it('should not fill', () => {
    expect(fill(2)).toEqual([undefined, undefined]);
  });
});

describe('task4', () => {
  it('should pair', () => {
    expect(
      fromPairs([
        ['a', 1],
        ['b', 2],
      ])
    ).toEqual({ a: 1, b: 2 });
  });
  it('should pair', () => {
    expect(
      fromPairs([
        ['someString', [2, 3]],
        ['b', 2],
      ])
    ).toEqual({ someString: [2, 3], b: 2 });
  });
  it('should not pair', () => {
    expect(fromPairs()).toBeUndefined();
  });
});

describe('task5', () => {
  it('should find intersection', () => {
    expect(intersection([1, 2], [2, 3])).toEqual([2]);
  });
  it('should find intersection', () => {
    expect(intersection(['b', 'e', 'c'], ['b', 'b', 'e'])).toEqual(['b', 'e']);
  });
  it('should not find intersection', () => {
    expect(intersection()).toBeUndefined();
  });
});
