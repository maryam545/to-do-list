const add = document.querySelector(".add");
const input = document.querySelector(".input");
const taskList = document.querySelector(".task");

add.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = input.value;
    taskList.appendChild(newTask);
    input.
  }
});

//     taskList.appendChild(newTask);

//     input.value = "";
//   }
// });
