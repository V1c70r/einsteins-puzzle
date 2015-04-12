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

/**
 * Solve Einstein's Puzzle and print solutions.
 */
function solve() {
  nationalities: for (var nationalities of permutation(['Swede', 'Dane', 'German', 'Norwegian' , 'Brit'])) {
    colors: for (var colors of permutation(['Red', 'Green', 'Blue', 'Yellow' , 'White'])) {
      beverages: for (var beverages of permutation(['Tea', 'Coffee', 'Water', 'Chocolate' , 'Milk'])) {
        cigares: for (var cigares of permutation(['Pall Mall', 'Blend', 'Blue Master', 'Dunhill' , 'Prince'])) {
          pets: for (var pets of permutation(['Dogs', 'Birds', 'Horses', 'Cats' , 'Fish'])) {
            printSolution();
          }
        }
      }
    }
  }

  function repeat(str, count) {
    return new Array(count + 1).join(str);
  }

  function ljust(str, size) {
    return (str + repeat(' ', size)).slice(0, Math.max(size, str.length));
  }

  function printSolution() {
    console.log(repeat('-', 61));
    console.log(
      '| #' +
      ' | ' + ljust('Nation', 9) +
      ' | ' + ljust('Color', 6) +
      ' | ' + ljust('Beverage', 9) +
      ' | ' + ljust('Cigar', 11) +
      ' | ' + ljust('Pet', 6) +
      ' |');
    console.log(repeat('-', 61));

    for (var i = 0; i < 5; i++) {
      console.log(
         '| ' + (i + 1) +
        ' | ' + ljust(nationalities[i], 9) +
        ' | ' + ljust(colors[i], 6) +
        ' | ' + ljust(beverages[i], 9) +
        ' | ' + ljust(cigares[i], 11) +
        ' | ' + ljust(pets[i], 6) +
        ' |');
    }

    console.log(repeat('-', 61));
    console.log();
  }
}
exports.solve = solve;
