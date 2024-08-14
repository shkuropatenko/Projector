"use strict";

const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];

let newInitials = userNames.map((name) => {
  let newArrInitials = name.split(" ");
  let initialsArr = [];

  newArrInitials.map((value) => {
    return initialsArr.push(value.slice(0, 1).toUpperCase());
  });

  return initialsArr;
});

let initials = newInitials.map((name) => {
  return name.join("");
});

// тут ваш код ...

console.log(initials.sort()); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

const userNames2 = [
  "Петро",
  "Емма",
  "Юстин",
  "Ілля",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
];
let filteredNames = userNames2.filter((name) => {
  let newArr = [];
  if (
    name.slice(0, 1) === "А" ||
    name.slice(0, 1) === "Е" ||
    name.slice(0, 1) === "Є" ||
    name.slice(0, 1) === "И" ||
    name.slice(0, 1) === "І" ||
    name.slice(0, 1) === "Ї" ||
    name.slice(0, 1) === "О" ||
    name.slice(0, 1) === "У" ||
    name.slice(0, 1) === "Ю" ||
    name.slice(0, 1) === "Я"
  ) {
    return newArr.push(name);
  }
  // return newArr;
});

let filteredNames2 = (name) => {
  let newArr = [];
  for (let i = 0; i < name.length; i++) {
    if (
      name[i].slice(0, 1) === "А" ||
      name[i].slice(0, 1) === "Е" ||
      name[i].slice(0, 1) === "Є" ||
      name[i].slice(0, 1) === "И" ||
      name[i].slice(0, 1) === "І" ||
      name[i].slice(0, 1) === "Ї" ||
      name[i].slice(0, 1) === "О" ||
      name[i].slice(0, 1) === "У" ||
      name[i].slice(0, 1) === "Ю" ||
      name[i].slice(0, 1) === "Я"
    ) {
      newArr.push(name[i]);
    }
  }
  return newArr;
};

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNames2(userNames2)); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

const currentMaxValue = 4589;
let reverseMaxValue = Number(
  currentMaxValue.toString().split("").reverse().join("")
);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray
  .flat(Infinity)
  .reduce((acc, value) => acc * value, 1);

console.log(productOfArray); // 24
