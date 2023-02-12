"use strict";

// Grabbing the elements I'll need
let todo = document.querySelector("input");
let submit = document.querySelector("button");
let toDoList = document.querySelector(".to-do-list");
let clearList = document.querySelector(".clear-list");

// Function that's called when user clicks "submit" or presses "enter" while in the text input
function submitForm() {
  //Create li element, add text into it, and add it into the ordered list.
  let task = document.createElement("li");
  let taskButton = document.createElement("button");
  task.textContent = todo.value;
  taskButton.textContent = "X";
  toDoList.appendChild(task);
  task.appendChild(taskButton);

  // Add button onto task with event listener that will set the li to inactive when it is clicked.
  taskButton.addEventListener("click", function () {
    task.classList.add("inactive");
  });

  // Clear all li's. Have to loop over them to select each one out of the nodelist array
  let clearAll = document.querySelectorAll("li");
  clearList.addEventListener("click", function () {
    for (let i = 0; i < clearAll.length; i++) {
      clearAll[i].classList.add("inactive");
    }
  });

  todo.value = "";
}
