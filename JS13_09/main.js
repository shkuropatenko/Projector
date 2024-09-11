"use strict";

const body = document.querySelector("body");
const btn = document.querySelector("button");
const text = document.createElement("p");

function getFormatedDate() {
  const date = new Date();

  return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }:${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`;
}

function turnOn() {
  btn.textContent = "Turn off";
  localStorage.setItem("btnText", JSON.stringify(btn.textContent));

  text.textContent = `Last turn off: ${getFormatedDate()}`;
  localStorage.setItem("tag", JSON.stringify(text.textContent));

  body.style.backgroundColor = "#fff";
  localStorage.setItem("bgColor", JSON.stringify(body.style.backgroundColor));
}

function turnOff() {
  btn.textContent = "Turn on";
  localStorage.setItem("btnText", JSON.stringify(btn.textContent));

  text.textContent = `Last turn on: ${getFormatedDate()}`;
  localStorage.setItem("tag", JSON.stringify(text.textContent));

  body.style.backgroundColor = "#ccc";
  localStorage.setItem("bgColor", JSON.stringify(body.style.backgroundColor));
}

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (btn.innerText === "Turn off") {
    btn.after(text);
    turnOff();
  } else {
    turnOn();
  }
});

if (localStorage.getItem("tag") !== null) {
  btn.after(text);
  text.textContent = [...localStorage.getItem("tag")].slice(1, -1).join("");
  btn.textContent = [...localStorage.getItem("btnText")].slice(1, -1).join("");
  body.style.backgroundColor = [...localStorage.getItem("bgColor")]
    .slice(1, -1)
    .join("");
}
