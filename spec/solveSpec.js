'use strict';

var factorial = require('../solve').factorial;

describe('factorial', function () {
  it('should return 1 for 0', function () {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 for 1', function () {
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 for 2', function () {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 for 3', function () {
    expect(factorial(3)).toBe(6);
  });

  it('should return 24 for 4', function () {
    expect(factorial(4)).toBe(24);
  });

  it('should return 120 for 5', function () {
    expect(factorial(5)).toBe(120);
  });

  it('should return 720 for 6', function () {
    expect(factorial(6)).toBe(720);
  });

  it('should return 5040 for 7', function () {
    expect(factorial(7)).toBe(5040);
  });

  it('should return 40 320 for 8', function () {
    expect(factorial(8)).toBe(40320);
  });

  it('should return 362 880 for 9', function () {
    expect(factorial(9)).toBe(362880);
  });

  it('should return 3 628 800 for 10', function () {
    expect(factorial(10)).toBe(3628800);
  });
});

//describe('permutation', function () {
//  it('should return a generator for an empty array');
//  it('should return a generator for an array with one item');
//  it('should return all permutation for an array with two item');
//  it('should return all permutation for an array with three item');
//  it('should return all permutation for an array with five item');
//});