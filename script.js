const add = document.querySelector(".add");
const input = document.querySelector(".input");
const taskList = document.querySelector(".task");

add.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = input.value;
    taskList.appendChild(newTask);
    input.value = "";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener("click", function () {
    newTask.remove();
  
  });
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
    newTask.textContent = prompt("Edit your task", newTask.textContent);
  });
    newTask.appendChild(editButton); 
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
  }
});
