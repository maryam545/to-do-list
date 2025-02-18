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
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
  }
});
