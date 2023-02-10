const form = document.querySelector("#add-task-form");
const taskCategory = document.querySelector("#task-category");
const taskDescription = document.querySelector("#task-description");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Create the task element
  const task = document.createElement("li");
  task.innerHTML = `
    <input type="checkbox">
    <label>${taskDescription.value}</label>
    <button class="edit-task">Edit</button>
    <button class="delete-task">Delete</button>
  `;

  // Add the task to the task list
  taskList.appendChild(task);

  // Clear the form
  taskCategory.value = "default";
  taskDescription.value = "";
});

taskList.addEventListener("click", function(e) {
  // Edit task
  if (e.target.classList.contains("edit-task")) {
    const task = e.target.parentElement;
    const checkbox = task.querySelector("input[type='checkbox']");
    const label = task.querySelector("label");

    checkbox.disabled = true;
    label.contentEditable = true;
    label.focus();
  }

  // Delete task
  if (e.target.classList.contains("delete-task")) {
    e.target.parentElement.remove();
  }
});
const firebase = require("./firebase.js");