'use strict';

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
  if (array.length === 1) {
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
  nationalities: for (var nationalities of permutation(['Swede', 'Dane', 'German', 'Norwegian', 'Brit'])) {
    colors: for (var colors of permutation(['Red', 'Green', 'Blue', 'Yellow' , 'White'])) {
      beverages: for (var beverages of permutation(['Tea', 'Coffee', 'Water', 'Chocolate' , 'Milk'])) {
        cigares: for (var cigares of permutation(['Pall Mall', 'Blend', 'Blue Master', 'Dunhill' , 'Prince'])) {
          pets: for (var pets of permutation(['Dogs', 'Birds', 'Horses', 'Cats' , 'Fish'])) {
            // The Norwegian lives in the first house.
            if (nationalities[0] !== 'Norwegian') { continue nationalities; }

            // The Norwegian lives next to the blue house.
            if (colors[1] !== 'Blue') { continue colors; }

            // The man living in the house right in the middle drinks milk.
            if (beverages[2] !== 'Milk') { continue beverages; }

            // The Brit lives in a red house.
            if (colors[nationalities.indexOf('Brit')] !== 'Red') { continue colors; }

            // The Swede keeps dogs as pets.
            if (pets[nationalities.indexOf('Swede')] !== 'Dogs') { continue pets; }

            // The Dane drinks tea.
            if (beverages[nationalities.indexOf('Dane')] !== 'Tea') { continue beverages; }

            // The green house owner drinks coffee.
            if (beverages[colors.indexOf('Green')] !== 'Coffee') { continue beverages; }

            // The person who smokes Pall Mall rears birds.
            if (pets[cigares.indexOf('Pall Mall')] !== 'Birds') { continue pets; }

            // The German smokes Prince.
            if (cigares[nationalities.indexOf('German')] !== 'Prince') { continue cigares; }

            // The owner who smokes Blue Master drinks chocolate.
            if (beverages[cigares.indexOf('Blue Master')] !== 'Chocolate') { continue cigares; }

            // The owner of the yellow house smokes Dunhill.
            if (cigares[colors.indexOf('Yellow')] !== 'Dunhill') { continue cigares; }

            // The green house is on the immediate left of the white house.
            if (colors.indexOf('Green') + 1 !== colors.indexOf('White')) { continue colors; }

            // The man who smokes Blend has a neighbour who drinks water.
            var leftBlend = cigares.indexOf('Blend') - 1;
            var rightBlend = cigares.indexOf('Blend') + 1;
            var neighbourOfBlendDrinksWater = (leftBlend >= 0 && beverages[leftBlend] === 'Water') ||
              (rightBlend < beverages.length && beverages[rightBlend] === 'Water');
            if (!neighbourOfBlendDrinksWater) { continue cigares; }

            // The man who keeps horses lives next door to the man who smokes Dunhill.
            var leftDunhill = cigares.indexOf('Dunhill') - 1;
            var rightDunhill = cigares.indexOf('Dunhill') + 1;
            var neighbourOfDunhillKeepsHorses = (leftDunhill >= 0 && pets[leftDunhill] === 'Horses') ||
              (rightDunhill < pets.length && pets[rightDunhill] === 'Horses');
            if (!neighbourOfDunhillKeepsHorses) { continue pets; }

            // The man who smokes Blend lives next door to the one who keeps cats.
            var neighbourOfBlendKeepsCats = (leftBlend >= 0 && pets[leftBlend] === 'Cats') ||
              (rightBlend < pets.length && pets[rightBlend] === 'Cats');
            if (!neighbourOfBlendKeepsCats) { continue pets; }

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
