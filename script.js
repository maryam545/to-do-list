"use strick";
const taskInput = document.querySelector(".taskInput");
const addTaskBtn = document.querySelector(".addTaskBtn");
const clearTasksBtn = document.querySelector(".clearTasksBtn");
const taskList = document.querySelector(".taskList");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("pleas enter task");
  } else {
    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("deleteBtn");
    li.append(deleteBtn);
    taskList.append(li);
    taskInput.value = "";
    deleteBtn.addEventListener("click", function () {
      taskList.remove(li);
    });
  }
});
clearTasksBtn.addEventListener("click", function () {
  taskList.innerHTML = "";
});
