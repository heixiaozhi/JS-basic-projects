'use strict'

const changeBgc = document.querySelector(".change-container")
const btn = document.querySelector("#btn")
const spanColor = document.querySelector("#span-color")
const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let color = "#";
  // 随机组成rgb
  for (let i = 0; i < 6; i++) {
    const item = Math.floor(Math.random() * colors.length);
    color += colors[item];
  }
  changeBgc.style.backgroundColor = color;
  spanColor.textContent = color;
})