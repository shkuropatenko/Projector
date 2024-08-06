"use strict";

// Exersize #2
const count = 100;
let num = 0;

// for (let i = 1; i <= count; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("ЛолКек");
//   } else if (i % 3 === 0) {
//     console.log("Лол");
//   } else if (i % 5 === 0) {
//     console.log("Кек");
//   }
// }

const value = 10;
if (typeof value !== "number") "Таке чуство шо Бог десь наказує нас за шось";
for (let i = 1; i < value; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
