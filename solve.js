'use strict';

function factorial(n) {
  var result = 1;

  for (var i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
exports.factorial = factorial;