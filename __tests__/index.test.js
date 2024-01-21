import * as funcs from '../index.js';

/* test('task1', () => { */
  describe('task1', () => {
    it('should count', () => {
      expect(funcs.countAverage([5, 7, 9, 3, 2])).toEqual(5.2);
    });
    it('should count', () => {
      expect(funcs.countAverage([4, 7, 9, 3, 2])).toEqual(5);
    });
    it('should not count', () => {
      expect(funcs.countAverage()).toBeUndefined();
    });
  });

  describe('task2', () => {
    it('should find', () => {
      expect(funcs.alphaOmega([5, 7, 9, 3, 2])).toEqual([5, 2]);
    });
    it('should find', () => {
      expect(funcs.alphaOmega([4, 7, 9, 3, 2])).toEqual([4, 2]);
    });
    it('should not find', () => {
      expect(funcs.alphaOmega()).toBeUndefined();
    });
  });

  describe('task3', () => {
    it('should fill', () => {
      expect(funcs.fill(4, 'someString')).toEqual([
        'someString',
        'someString',
        'someString',
        'someString',
      ]);
    });
    it('should not fill', () => {
      expect(funcs.fill(2)).toEqual([undefined, undefined]);
    });
  });

  describe('task4', () => {
    it('should pair', () => {
      expect(
        funcs.fromPairs([
          ['a', 1],
          ['b', 2],
        ])
      ).toEqual({ a: 1, b: 2 });
    });
    it('should pair', () => {
      expect(
        funcs.fromPairs([
          ['someString', [2, 3]],
          ['b', 2],
        ])
      ).toEqual({ someString: [2, 3], b: 2 });
    });
    it('should not pair', () => {
      expect(funcs.fromPairs()).toBeUndefined();
    });
  });

  describe('task5', () => {
    it('should find intersection', () => {
      expect(funcs.intersection([1, 2], [2, 3])).toEqual([2]);
    });
    it('should find intersection', () => {
      expect(funcs.intersection(['b', 'e', 'c'], ['b', 'b', 'e'])).toEqual([
        'b',
        'e',
      ]);
    });
    it('should not find intersection', () => {
      expect(funcs.intersection()).toBeUndefined();
    });
  });
/* }); */
