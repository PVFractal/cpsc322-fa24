"use strict";

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const jsonString = localStorage.getItem("tasks");
  return jsonString ? JSON.parse(jsonString) : [];
}

export {saveTasks, loadTasks}