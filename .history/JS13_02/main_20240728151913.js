"use strict";

// Exersize #1
const num1 = 100;
const num2 = 60;

const resultSum = num1 + num2;
console.log(resultSum, "resultSum");

const resultSubtraction = num1 - num2;
console.log(resultSubtraction, "resultSubtraction");

const resultMultiplication = num1 * num2;
console.log(resultMultiplication, "resultMultiplication");

const resultDivision = num1 / num2;
console.log(resultDivision, "resultDivision");

const resultExponentiation = Math.pow(num1, 2);
console.log(resultExponentiation, "resultExponentiation");

const resultSquareRoot = Math.sqrt(num1);
console.log(resultSquareRoot, "resultSquareRoot");

// Exersize #2
const arbitraryVar = 1000;

let resultArbitraryString = arbitraryVar + "";
console.log(resultArbitraryString, typeof resultArbitraryString);

const resultArbitraryNumber = resultArbitraryString++;
console.log(resultArbitraryNumber, typeof resultArbitraryNumber);

const resultArbitraryBoolean = Boolean(resultArbitraryString);
console.log(resultArbitraryBoolean, typeof resultArbitraryBoolean);
