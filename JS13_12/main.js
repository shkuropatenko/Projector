// 1
// Яким буде результат його виклику? Чому? Опишіть як працює цей код.
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

// 1) Виведе start, тому що це перше що компілятор зустрічає і це є синхронний код.
// 2) Створюється проміс, і одразу виповнюється, виведе 1 у консоль, у resolve повертаємо 2 і це є асинхронний код,   тому він поки не виповнюється.
// 3) promise1.then - асинхронний код, виповниться після усіх синхронних операцій.
// 4) Виведеться end
// 5) Далі після синхронного коду, завершує асинхронний код та виведе 2

// Тобто:
// start
// 1
// end
// 2

// Яким буде результат його виклику? Чому? Опишіть як працює цей код.

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("My Error");
  })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error);

// 1) .then((x) => x + 1) === 2
// 2) буде помилка throw new Error("My Error");
// 3) .catch (() => 1) викликається обробник помилок rejected, та отримує результат 1
// 4).then((x) => x + 1) х = 1, отримуємо 2, Перехоплює помилку, викинуту на попередньому кроці
// 5) .then((x) => console.log(x)) = виводе 2, та console.log повертає undefined
// 6) .catch (console.error); = помилки нема, тому на спрацює

// Тобто: 2

// Яким буде результат його виклику? Чому? Опишіть як працює цей код.

const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });

// 1) then - console.log(v) = 2, та повертає 2 * 2 = 4
// 2) then - console.log(v) = 4, та повертає 4 * 2 = 8
// 2) finally - виповнюється у буд'якому випадку, та finally не приймає жодних аргументів, тому поверне undefined
// 4) finally - ніколи не отримує значення з попередніх промісів, та повернуло undefined, та finally не передає значення далі.
// 5) then - console.log(v) = undefined

// Тобто:
// 2
// 4
// undefined
// undefined
