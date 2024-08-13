"use strict";
let num = -1;
function recursiveOddSumTo(number) {
  if (number % 2 !== 0) {
    num += number;
  }

  if (number == 0) {
    return num;
  } else {
    return recursiveOddSumTo(number - 1);
  }
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

function iterativeOddSumTo(number) {
  let i = 0;
  let num2 = 0;
  while (i < number) {
    i++;
    if (i % 2 !== 0) {
      num2 += i;
    }
  }
  return num2;
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25
