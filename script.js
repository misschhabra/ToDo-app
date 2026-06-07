function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if(taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleComplete(this)">
            ${taskInput.value}
        </span>

        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    taskList.appendChild(li);

    saveTasks();

    taskInput.value = "";
}

function toggleComplete(task){

    task.classList.toggle("completed");

    saveTasks();
}

function deleteTask(button){

    button.parentElement.remove();

    saveTasks();
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        document.getElementById("taskList").innerHTML
    );
}

function loadTasks(){

    document.getElementById("taskList").innerHTML =
        localStorage.getItem("tasks") || "";
}

function filterTasks(type){

    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {

        const isCompleted =
            task.querySelector("span").classList.contains("completed");

        if(type === "all"){
            task.style.display = "flex";
        }

        else if(type === "active"){
            task.style.display =
                isCompleted ? "none" : "flex";
        }

        else if(type === "completed"){
            task.style.display =
                isCompleted ? "flex" : "none";
        }

    });

}

loadTasks();