"use strict";
window.addEventListener("DOMContentLoaded", go);
let counter;
let box = document.getElementById("artwork1");

function go() {
  for (let counter = 100; counter < 300; counter += 20) {
    console.log(counter);
    const newDiv = document.createElement("div");
    box.appendChild(newDiv);
    newDiv.classList.add("box");
    newDiv.style.height = `${counter}px`;
    newDiv.style.width = `${counter}px`;
  }
  for (let counter = 0; counter < 90; counter += 10) {
    console.log(counter);
    const newDiv = document.createElement("div");
    document.querySelector("#artwork2").appendChild(newDiv);
    newDiv.classList.add("box");
    newDiv.style.transform = `rotate(${counter}deg)`;
  }
  for (let counter = 0; counter < 200; counter += 10) {
    console.log(counter);
    const newDiv = document.createElement("div");
    document.querySelector("#artwork3").appendChild(newDiv);
    newDiv.classList.add("circle");
    newDiv.style.height = `${counter}px`;
    newDiv.style.width = `${counter}px`;
  }
  for (let counter = -90; counter < 90; counter += 20) {
    console.log(counter);
    const newDiv = document.createElement("div");
    document.querySelector("#artwork4").appendChild(newDiv);
    newDiv.classList.add("box");
    newDiv.style.transform = `translate(${counter}px ,${counter}px )`;
  }
  for (let counter = 1; counter < 512; counter *= 2) {
    console.log(counter);
    const newDiv = document.createElement("div");
    document.querySelector("#artwork5").appendChild(newDiv);
    newDiv.classList.add("circle");
    newDiv.style.height = `${counter}px`;
    newDiv.style.width = `${counter}px`;
  }
  for (let counter = -20; counter < 45; counter += 5) {
    console.log(counter);
    const newDiv = document.createElement("div");
    document.querySelector("#artwork6").appendChild(newDiv);
    newDiv.classList.add("circle");
    newDiv.style.transform = `translateX(${counter - 50}px)`;
    newDiv.style.transform = `rotate(${counter * 4}deg)`;
  }
  for (let counter = 0; counter < 200; counter += 10) {
    console.log(counter);
    const newDiv = document.createElement("div");
    document.querySelector("#artwork7").appendChild(newDiv);
    newDiv.classList.add("circle");
    newDiv.style.height = `${counter}px`;
    newDiv.style.width = `${counter}px`;
    newDiv.style.transform = `translateX(${counter}px)`;
    newDiv.style.transform = `translateY(${-counter / 2}px)`;
  }
  for (let counter = 50; counter < 200; counter += 10) {
    console.log(counter);
    const newDiv = document.createElement("div");
    document.querySelector("#artwork8").appendChild(newDiv);
    newDiv.classList.add("box");
    newDiv.style.height = `${counter}px`;
    newDiv.style.width = `${counter}px`;
    newDiv.style.transform = `translateX(${counter / 2}px)`;
    newDiv.style.transform = `rotate(${counter}deg)`;
  }
  for (let counter = 50; counter < 200; counter += 30) {
    console.log(counter);
    const newDiv = document.createElement("div");
    const newDiv1 = document.createElement("div");

    document.querySelector("#artwork9").appendChild(newDiv);
    document.querySelector("#artwork9").appendChild(newDiv1);
    newDiv1.classList.add("circle");
    newDiv.classList.add("box");
    newDiv.style.height = `${counter}px`;
    newDiv.style.width = `${counter}px`;
    newDiv1.style.height = `${counter}px`;
    newDiv1.style.width = `${counter}px`;
  }
}
