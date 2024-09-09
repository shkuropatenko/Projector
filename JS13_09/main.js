"use strict";

const body = document.querySelector("body");
const form = document.querySelector("form");
const btn = document.querySelector("button");
const text = document.createElement("p");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  const date = new Date();
  const formattedDate = `${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  }-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }:${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`;

  if (btn.innerText === "Turn off") {
    btn.after(text);
    localStorage.setItem(
      "btnText",
      JSON.stringify((btn.textContent = "Turn on"))
    );
    localStorage.setItem(
      "tag",
      JSON.stringify((text.textContent = `Last turn on: ${formattedDate}`))
    );
    localStorage.setItem(
      "bgColor",
      JSON.stringify((body.style.backgroundColor = "#ccc"))
    );
  } else {
    localStorage.setItem(
      "btnText",
      JSON.stringify((btn.textContent = "Turn off"))
    );
    localStorage.setItem(
      "tag",
      JSON.stringify((text.textContent = `Last turn off: ${formattedDate}`))
    );
    localStorage.setItem(
      "bgColor",
      JSON.stringify((body.style.backgroundColor = "#fff"))
    );
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
