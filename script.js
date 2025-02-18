const add = document.querySelector(".add");
const input = document.querySelector(".input");
const taskList = document.querySelector(".task");

add.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    // ایجاد تسک جدید
    const newTask = document.createElement("li");
    newTask.textContent = input.value;

    // ایجاد دکمه حذف
    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete";
    deleteTask.classList.add("delete");

    // اضافه کردن دکمه حذف به تسک
    newTask.appendChild(deleteTask);

    // اضافه کردن تسک به لیست
    taskList.appendChild(newTask);

    // پاک کردن ورودی بعد از اضافه کردن
    input.value = "";

    // اضافه کردن ایونت برای حذف تسک
    deleteTask.addEventListener("click", () => {
      newTask.remove();
    });
  }
});
