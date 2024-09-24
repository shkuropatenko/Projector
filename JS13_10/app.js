"use strict";

// 1. Додати нові задачі +
// 2. Видаляти всі задачі +
// 3. Видаляти окремі задачі +
// 4. Пошук/фільтрація +
// 5. Зберігати в стореджі +

// Отримуємо необхідні DOM елементи
const form = document.querySelector(".create-task-form"); // Форма для створення задач
const taskInput = document.querySelector(".task-input"); // Поле для введення задачі
const collection = document.querySelector(".collection"); // Список задач
const clearButton = document.querySelector(".clear-tasks"); // Кнопка для видалення всіх задач
const filterInput = document.querySelector(".filter-input"); // Поле для фільтрації задач

// Ключ для збереження задач в LocalStorage
const TASKS_STORAGE_KEY = "tasks";

// Додаємо обробники подій
document.addEventListener("DOMContentLoaded", renderTasks); // При завантаженні сторінки відображаємо задачі з LocalStorage
form.addEventListener("submit", addTask); // Додаємо задачу при сабміті форми
clearButton.addEventListener("click", removeTasks); // Видаляємо всі задачі при натисканні на кнопку
collection.addEventListener("click", removeTask); // Видаляємо окрему задачу при натисканні на кнопку "x"
collection.addEventListener("click", changeTask);
filterInput.addEventListener("input", filterTasks); // Фільтруємо задачі при введенні тексту у поле

// Відображення задач з LocalStorage
function renderTasks() {
  if (getTasksFromLocalStorage()) {
    const tasks = JSON.parse(getTasksFromLocalStorage());

    // Створюємо елемент для кожної задачі
    tasks.forEach((task) => {
      createTask(task);
    });
  }
}

// Отримуємо індекс останньої задачі для присвоєння новим задачам
function getLastTasksIndex() {
  if (getTasksFromLocalStorage()) {
    return JSON.parse(getTasksFromLocalStorage()).length;
  }

  return 0;
}

// Створення HTML-елементу для задачі
function createTask(task) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  li.innerHTML = task.title;
  li.classList.add("task");
  li.setAttribute("data-id", task.id); // Присвоюємо задачі унікальний індекс

  // Додаємо кнопку для видалення задачі
  const button = document.createElement("button");
  button.innerHTML = "x";
  button.className = "button-icon button-delete";

  const editButton = document.createElement("button");
  editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>`;
  editButton.className = "button-icon button-edit";
  li.append(div);
  div.append(button);
  div.append(editButton);

  // Додаємо задачу до колекції (списку)
  collection.append(li);
}

// Додавання нової задачі
function addTask(event) {
  event.preventDefault(); // Відміняємо перезавантаження сторінки при сабміті
  // console.log(event);
  const currentForm = event.target;
  const inputValue = currentForm.task.value; // Отримуємо значення з поля вводу

  if (!inputValue) {
    return; // Якщо поле порожнє, не додаємо задачу
  }

  const currentIndex = getLastTasksIndex(); // Отримуємо індекс для нової задачі

  const todo = {
    id: Date.now(),
    title: inputValue,
  };
  // createTask(todo); // Створюємо нову задачу
  createTask(todo); // Створюємо нову задачу
  setTaskToLocalStorage(todo); // Зберігаємо задачу в LocalStorage

  currentForm.reset(); // Очищаємо поле вводу
}

// Зберігаємо задачу в LocalStorage
function setTaskToLocalStorage(task) {
  let tasks = [];

  if (getTasksFromLocalStorage()) {
    tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо існуючі задачі
  }

  tasks.push(task); // Додаємо нову задачу
  setTasksToLocalStorage(tasks); // Оновлюємо LocalStorage
}

// Оновлюємо LocalStorage
function setTasksToLocalStorage(tasks) {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks)); // Зберігаємо задачі у форматі JSON
}

// Отримуємо задачі з LocalStorage
function getTasksFromLocalStorage() {
  return localStorage.getItem(TASKS_STORAGE_KEY); // Повертаємо задачі у вигляді рядка
}

// Очищаємо LocalStorage
function clearTasksFromLocalStorage() {
  localStorage.removeItem(TASKS_STORAGE_KEY); // Видаляємо всі задачі з LocalStorage
}

// Видалення всіх задач
function removeTasks() {
  collection.innerHTML = ""; // Очищаємо HTML-код списку задач

  clearTasksFromLocalStorage(); // Очищаємо LocalStorage
}

// Видалення окремої задачі
function removeTask(event) {
  if (event.target.classList.contains("button-delete")) {
    const li = event.target.closest(".task"); // Знаходимо батьківський елемент (задачу)
    const tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо задачі з LocalStorage
    // Фільтруємо задачі, залишаючи лише ті, які не мають індексу видаленої задачі
    const filteredTasks = tasks.filter((task) => {
      return task.id.toString() !== li.getAttribute("data-id");
    });

    removeTasks(); // Видаляємо всі задачі з інтерфейсу
    setTasksToLocalStorage(filteredTasks); // Зберігаємо оновлений список задач
    renderTasks(); // Відображаємо задачі після видалення
  }
}

function changeTask(event) {
  if (event.target.classList.contains("button-edit")) {
    const li = event.target.closest(".task"); // Знаходимо батьківський елемент (задачу)
    const tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо задачі з LocalStorage

    const taskId = li.getAttribute("data-id");
    let taskValue = li.firstChild.textContent;
    // prompt("Edit task", taskValue);
    const editedValue = prompt("Edit task", taskValue);
    const filteredTasks = tasks.map((task) => {
      if (task.id === Number(taskId)) {
        task.title = editedValue;
        taskValue = editedValue;
        return task;
      } else {
        return task;
      }
    });

    setTasksToLocalStorage(filteredTasks);
  }
}

// Фільтрація задач
function filterTasks(event) {
  const filterQuery = event.target.value; // Отримуємо значення з поля фільтрації

  const tasks = collection.querySelectorAll(".task"); // Отримуємо всі задачі

  tasks.forEach((task) => {
    const taskValue = task.firstChild.textContent; // Отримуємо текст задачі
    if (!taskValue.includes(filterQuery.trim())) {
      task.classList.add("hidden"); // Ховаємо задачі, які не відповідають запиту
    } else {
      task.classList.remove("hidden"); // Показуємо задачі, що відповідають запиту
    }
  });
}
