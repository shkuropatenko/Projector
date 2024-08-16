"use strict";

const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];

const newInitials = userNames.map((name) => {
  let newArrInitials = name.split(" ");

  let initialsArr = newArrInitials.map((value) => {
    return value.slice(0, 1).toUpperCase() + ".";
  });

  return initialsArr;
});

const initials = newInitials.map((name) => {
  return name.join("");
});

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
const vowels = ["А", "Е", "Є", "И", "І", "Ї", "О", "У", "Ю", "Я"];
const filteredNames = userNames2.filter((name) => {
  return vowels.includes(name[0]);
});

const filteredNames2 = () => {
  const newArr = [];
  for (let i = 0; i < userNames2.length; i++) {
    if (vowels.includes(userNames2[i][0])) {
      newArr.push(userNames2[i]);
    }
  }
  return newArr;
};

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNames2(userNames2)); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

const currentMaxValue = 4589;
const reverseMaxValue = Number(
  currentMaxValue.toString().split("").reverse().join("")
);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

const resultsArray = [1, 2, [3, [4]]];
const productOfArray = resultsArray
  .flat(Infinity)
  .reduce((acc, value) => acc * value, 1);

console.log(productOfArray); // 24
