"use strict";

// Exersize #2
const count = 100;
let num = 0;

for (let i = 0; i <= count; i++) {
  if (i % 3 === 0) {
    console.log("Лол");
  } else if (i % 5 === 0) {
    console.log("Кек");
  } else (i % 3 === 0 && i % 5 === 0) {
    console.log("ЛолКек");
  }
}
