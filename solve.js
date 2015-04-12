'use strict';

/**
 * Get a value of factorial.
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  var result = 1;

  for (var i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
exports.factorial = factorial;

/**
 * Return unique elements of array.
 * @param Array[string]
 * @returns Array[string]
 */
function uniq(array) {
  return Object.keys(array.reduce((dict, value) => {
    dict[value] = true;
    return dict;
  }, {}));
}
exports.uniq = uniq;

/**
 * Return a new version array without one element.
 * @param {Array} array - an original array.
 * @param {number} index - index to exclude.
 */
function without(array, index) {
  var result = array.slice();
  result.splice(index, 1);
  return result;
}
exports.without = without;

/**
 * Get all possible permutations for an array.
 * @param {Array} array
 * @returns {Generator[Array]}
 */
function *permutation(array) {
  if (array.length <= 1) {
    yield array;
  } else if (array.length === 2) {
    yield [array[0], array[1]];
    yield [array[1], array[0]];
  } else {
    for (var i = 0; i < array.length; i++) {
      for (var perm of permutation(without(array, i))) {
        yield [array[i]].concat(perm);
      }
    }
  }
}
exports.permutation = permutation;