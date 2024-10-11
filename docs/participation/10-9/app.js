"use strict";

import { saveTasks, loadTasks } from "./storage.js";
import { addTask, clear } from "./todo.js";

const inputField = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');




const tasks = loadTasks();

tasks.forEach(task => {
  addTask(task, taskList);
});

addTaskButton.addEventListener('click', () => {

  const taskValue = inputField.value.trim();
  if (taskValue) {
    addTask(taskValue, taskList);
    tasks.push(taskValue);
    saveTasks(tasks);
    clear(inputField);
  }
  
});