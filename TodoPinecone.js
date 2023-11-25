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
const addingTaskButton = document.getElementById("Adding-task-button")
const appendingCard = document.getElementsByClassName("card")
function cardAppending (){
    
}
