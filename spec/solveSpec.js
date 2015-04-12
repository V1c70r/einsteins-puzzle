'use strict';

function *hi() {
  yield 'Hello';
  yield 'World';
}

var g = hi();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());