"use strict";
let sentence = "   to     BE        oR        noOt       To        bE  ";

const editStr = (str) => {
  return str
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};
