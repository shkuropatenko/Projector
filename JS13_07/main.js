"use strict";

// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
  let timerId = setInterval(() => {
    if (delay > 0) {
      console.log(delay);
      delay--;
    } else {
      console.log("BOOM!");
      clearInterval(timerId);
    }
  }, 1000);
}

detonatorTimer(3);

function detonatorTimer2(delay) {
  if (delay > 0) {
    setTimeout(() => {
      console.log(delay);
      delay--;
      detonatorTimer2(delay);
    }, 1000);
  } else {
    setTimeout(() => {
      console.log("BOOM!");
    }, 1000);
  }
}
detonatorTimer2(3);

let me = {
  name: "Mykola",
  residency: "Lviv",
  gender: "male",
  age: 31,
  hobby: "crafting",
  defaultMood: "focused",
  currentMood: "sleepy",
  height: "35cm",
  weight: "8kg",
  introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
  },
  prognose() {
    console.log(`I hope that next year I'm gonna be ${this.age + 1}`);
  },
  describeMyMood() {
    console.log(
      `Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`
    );
  },
  myGender() {
    console.log(`My gender is ${this.gender}`);
  },
  myHobby() {
    console.log(`I like the ${this.hobby} beer`);
  },
  petParameters() {
    console.log(`My pet height is ${this.height} and weight is ${this.weight}`);
  },
};

me.introduce();
me.prognose();
me.describeMyMood();
me.myGender();
me.myHobby();
me.petParameters();

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.petParameters.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат