"use strict";
let sentence = "   to     BE        oR        noOt       To        bE  ";

const editStr = (str) => {
  let temporaryVal = [];
  str
    .toLowerCase()
    .trim()
    .split(" ")
    .map((item) => {
      if (item !== "") {
        temporaryVal.push(item);
      }
    });
  let editSentence = temporaryVal
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
  return editSentence;
};
