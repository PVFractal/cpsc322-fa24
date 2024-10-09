"use strict";

function addTask(task, taskList) {
  const li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);
}

function clear(inputField) {
  inputField.value = '';
}

export {addTask, clear};









