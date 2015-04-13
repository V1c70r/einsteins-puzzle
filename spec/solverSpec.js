'use strict';

var uniq = require('../solver').uniq;
var without = require('../solver').without;
var permutation = require('../solver').permutation;

describe('uniq', () => {
  it('should return an empty array', () => {
    expect(uniq([])).toEqual([]);
  });

  it('should return an array with one item', () => {
    expect(uniq(['a'])).toEqual(['a']);
  });

  it('should return unique elements of array', () => {
    expect(uniq([1, 2, 3, 'a', 'b', 'c'])).toEqual(['1', '2', '3', 'a', 'b', 'c']);
    expect(uniq([1, 2, 3, 'a', 'b', 'c', 'c', 'b', 'b', 'a', 3, 2, 1])).toEqual(['1', '2', '3', 'a', 'b', 'c']);
  });
});

describe('without', () => {
  it('should not change an original array', () => {
    var ar = ['a', 'b', 'c', 'd', 'e'];
    without(ar, 1)
    expect(ar).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('should return new array without one element', () => {
    expect(without(['a', 'b', 'c', 'd', 'e'], 1)).toEqual(['a', 'c', 'd', 'e']);
  });

  it('should return original array for indexes bigger than an array length', () => {
    expect(without([], 10)).toEqual([]);
    expect(without(['a', 'b', 'c', 'd', 'e'], 10)).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});

describe('permutation', () => {
  function allValues(generator) {
    var values = [];

    for (var value of generator) {
      values.push(value);
    }

    return values;
  }

  it('should return nothing for an empty array', () => {
    expect(allValues(permutation([]))).toEqual([]);
  });

  it('should return a generator for an array with one item', () => {
    expect(allValues(permutation(['a']))).toEqual([['a']]);
  });

  it('should return all permutation for an array with two item', () => {
    expect(allValues(permutation(['a', 'b']))).toEqual([
      ['a', 'b'],
      ['b', 'a']
    ]);
  });

  it('should return all permutation for an array with three item', () => {
    expect(allValues(permutation(['a', 'b', 'c'])).sort()).toEqual([
      ['a', 'b', 'c'],
      ['a', 'c', 'b'],
      ['b', 'a', 'c'],
      ['b', 'c', 'a'],
      ['c', 'a', 'b'],
      ['c', 'b', 'a']
    ]);
  });

  it('should return all permutation for an array with five item', () => {
    var values = allValues(permutation(['a', 'b', 'c', 'd', 'e']));

    expect(values.length).toBe(5 * 4 * 3 * 2 * 1);
    values.forEach(function (array) {
      expect(array.indexOf('a')).not.toBe(-1);
      expect(array.indexOf('b')).not.toBe(-1);
      expect(array.indexOf('c')).not.toBe(-1);
      expect(array.indexOf('d')).not.toBe(-1);
      expect(array.indexOf('e')).not.toBe(-1);
    });

    expect(uniq(values.map(v => String(v))).length).toBe(5 * 4 * 3 * 2 * 1);
  });
});