// Backdrop popping up
const backDrop = document.getElementById("Backdrop")
function addTask(){
    backDrop.style.display = 'block'
}
const addTaskRef = document.getElementsByClassName("Add-task");
for (const element of addTaskRef) {
    element.addEventListener('click', addTask);
}

// Backdrop hiding
const backDropDotorh = document.getElementById("Backdrop-dotorh")
function BackdropHiding() {
    backDrop.style.display = 'none';
}
backDropDotorh.addEventListener("click", BackdropHiding)

// Appending task
const addingTaskButtonRef = document.getElementById("Adding-task-button");
const toDoTasks = [];
document.getElementById("To-do-tasks").innerHTML = toDoTasks;
const inProgressTasks = [];
document.getElementById("In-progress-card").innerHTML = inProgressTasks;
const stuckTasks = [];
document.getElementById("Stuck-tasks").innerHTML = stuckTasks;
const doneTasks = [];
document.getElementById("Done-tasks").innerHTML = doneTasks;

function getStatusOption() {
    let selectElement = document.getElementById("Status-select");
    let output = selectElement.value;
    
    if (output === "Todo") {
        toDoTasks.push(Array.from(document.getElementById("card")));
    } else if (output === "In-progress") {
        inProgressTasks.push(Array.from(document.getElementById("card")));
    } else if (output === "Stuck") {
        stuckTasks.push(Array.from(document.getElementById("card")));
    } else if (output === "Done") {
        doneTasks.push(Array.from(document.getElementById("card")));
    }
}

addingTaskButtonRef.addEventListener("click", getStatusOption);


