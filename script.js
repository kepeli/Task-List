const newTaskForm = document.getElementById("new-task-form");
const newTaskInput = document.getElementById("new-task-input");
const newTaskSubmit = document.getElementById("new-task-submit");
const mainTaskHeader = document.querySelector(".mainTaskHeader")
const task = document.getElementById("tasks");
const deleteAllTask = document.querySelector(".deleteAllTask");
const tasksHeading = document.querySelector(".tasksHeading");


// the function is for the digital clock
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec + am_pm;

    document.getElementById("clock")
        .innerHTML = currentTime;
}

showTime();




newTaskSubmit.addEventListener("click", function (e) {



    deleteAllTask.style.display = "block";
    tasksHeading.style.display = "block";

    const taskInput = newTaskInput.value;

    if (!taskInput) {
        alert("Please fill out the task!");
        return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    //taskElement.textContent = taskInput;

    const taskInputElement = document.createElement("div");
    taskInputElement.classList.add("content");

    task.appendChild(taskElement);
    taskElement.appendChild(taskInputElement);

    //taskInputElement.textContent = taskInput;

    const inputElement = document.createElement("input");
    inputElement.classList.add("text");
    inputElement.type = "text";
    inputElement.value = taskInput;
    inputElement.setAttribute("readonly", "readonly");

    taskInputElement.appendChild(inputElement);

    newTaskInput.value = "";

    //this part is to create the add and remove button

    const buttons = document.createElement("div");
    buttons.classList.add("action");

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerText = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";

    taskElement.appendChild(buttons);

    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);

    editButton.addEventListener("click", (e) => {
        if (editButton.innerText.toLowerCase() == "edit") {
            editButton.innerText = "Save";
            inputElement.removeAttribute("readonly");
            inputElement.focus()
        } else {
            editButton.innerText = "Edit";
            inputElement.setAttribute("readonly", "readonly");
        };



    })

    deleteButton.addEventListener("click", (e) => {
        task.removeChild(taskElement);
    })



});



deleteAllTask.addEventListener("click", (e) => {
    //deleteAll.innerHTML = "";
    deleteAllTask.style.display = "none";
    tasksHeading.style.display = "none";
    task.innerHTML = "";
})




