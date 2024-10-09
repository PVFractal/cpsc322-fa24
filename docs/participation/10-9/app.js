"use strict";

import { saveTasks, loadTasks } from "./storage";
import { addTask, clear } from "./todo";

const inputField = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');




const tasks = loadTasks();

addTaskButton.addEventListener('click', () => {
  const taskValue = inputField.value;
  tasks.push(taskValue);
  saveTasks(tasks);
  //addTask(taskValue, taskList);
  clear(input);
});