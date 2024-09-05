"use strict";

const domSelector = document.body.children[2];
const domSelectorH2 = (domSelector.querySelector("h2").style.backgroundColor =
  "#f00");

const domSelectorSection = document.querySelector(".firstSection");
const domSelectorSectionH2 = (domSelectorSection.querySelector(
  "h2"
).style.backgroundColor = "#ccc");

const domSelectorSectionUl = (domSelector.querySelector(
  "ul"
).children[4].style.cssText = `
  font-weight: bold;
  color: #f00;
`);

const hatredLevelBlock = (document.querySelector(
  ".hatredLevelBlock"
).style.cssText = `
  padding: 20px;
  box-shadowL 0 0 3px #000;
  border: 1px solid #ccc;
  font-weight: bold;
  color: orange;
`);
