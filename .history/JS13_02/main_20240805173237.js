"use strict";

// Exersize #2
const count = 100;
let num = 0;

for (let i = 0; i <= count.length; i++) {
  num = i;

  if (i % 3 === 0) {
    num = i;
  }
}
console.log(num);
