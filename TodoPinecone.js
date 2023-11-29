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
// number of tasks
let todoTasksNumber = document.getElementById("To-do-card").querySelector("h3").querySelector("span").innerText
let inProgressTasksNumber = document.getElementById("In-progress-card").querySelector("h3").querySelector("span").innerText 
let stuckTasksNumber = document.getElementById("Stuck-card").querySelector("h3").querySelector("span").innerText 
let doneTasksNumber = document.getElementById("Done-card").querySelector("h3").querySelector("span").innerText 

backDropDotorh.addEventListener("click", BackdropHiding)
// Adding task
const tasks = [];
const addTaskButtonRef = document.getElementById("Adding-task-button");
// title error
const fillTitleField = document.createElement("div");
fillTitleField.setAttribute("id", "title-alert");
fillTitleField.textContent = "Please type a title";
fillTitleField.style.display = "none"
document.getElementById("New-task-title").appendChild(fillTitleField)
// description error 
const fillFieldDescription = document.createElement("div");
fillFieldDescription.setAttribute("id", "description-alert");
fillFieldDescription.textContent = "Please type a description";
document.getElementById("New-task-description").appendChild(fillFieldDescription);
fillFieldDescription.style.display = "none"
// nondisplaying alert 

function addingTask() {
    const newTaskTitleInput = document.getElementById('New-task-title-input');
    const newTaskTitle = newTaskTitleInput.value.trim();
    const newTaskDescriptionInput = document.getElementById('New-task-description-input');
    const newTaskDescription = newTaskDescriptionInput.value.trim();
    const selectedStatus = document.getElementById('Status-select');
    const statusValue = selectedStatus.value;
    const newTaskPriorityInput = document.getElementById("Add-Task-Priority-input");
    const newTaskPriority = newTaskPriorityInput.value;

    // NEW TASK OBJECT
    const newTaskItem = { title: newTaskTitle, description: newTaskDescription, status: statusValue, priority: newTaskPriority };
    // CREATING
    const taskItem = document.createElement('li');
    taskItem.setAttribute('id', 'task-item');

    const checkButtonRef = document.createElement('button');
    checkButtonRef.setAttribute('id', 'check-button');
    checkButtonRef.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';
    taskItem.appendChild(checkButtonRef);

    const taskList = document.getElementById('task-list');

    const details = document.createElement('div');
    details.setAttribute('class', 'Details');

    const taskTitle = document.createElement('h4');
    taskTitle.innerText = newTaskTitle;

    const textNote = document.createElement('p');
    textNote.innerText = newTaskDescription;

    const priority = document.createElement('div');
    priority.setAttribute('class', 'priority');
    priority.innerText = newTaskPriority;

    details.appendChild(taskTitle);
    details.appendChild(textNote);
    details.appendChild(priority);
    taskItem.appendChild(details);

    const actions = document.createElement('div');
    actions.setAttribute('class', 'actions');

    // Remove button
    const removeButtonRef = document.createElement('button');
    removeButtonRef.setAttribute('id', 'remove-button');
    removeButtonRef.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
    
    actions.appendChild(removeButtonRef);


    // Edit button
    const editButtonRef = document.createElement('button');
    editButtonRef.setAttribute('id', 'edit-button');
    editButtonRef.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>';
    actions.appendChild(editButtonRef);
    taskItem.appendChild(actions);
    if (newTaskTitle !== '' && newTaskDescription !== '') {
        if (newTaskItem.status === "Todo") {
            const toDoTasks = document.getElementById("To-do-tasks");
            toDoTasks.appendChild(taskItem);
            newTaskTitleInput.value = '';
            newTaskDescriptionInput.value = '';
            backDrop.style.display = 'none';
            const todoTaskCount = toDoTasks.getElementsByTagName('li').length;
            todoTasksNumber = `Number of tasks: ${todoTaskCount}`;
        } else if (newTaskItem.status === "In-progress") {
            const inProgressTasks = document.getElementById("In-progress-tasks");
            inProgressTasks.appendChild(taskItem);
            newTaskTitleInput.value = '';
            newTaskDescriptionInput.value = '';
            backDrop.style.display = 'none';
            const inProgressTaskCount = inProgressTasks.getElementsByTagName('li').length;
            inProgressTasksNumber = `Number of tasks: ${inProgressTaskCount}`;
        } else if (newTaskItem.status === "Stuck") {
            const stuckTasks = document.getElementById("Stuck-tasks");
            stuckTasks.appendChild(taskItem);
            newTaskTitleInput.value = '';
            newTaskDescriptionInput.value = '';
            backDrop.style.display = 'none';
            const stuckTaskCount = stuckTasks.getElementsByTagName('li').length;
            stuckTasksNumber = `Number of tasks: ${stuckTaskCount}`;
        } else if (newTaskItem.status === "Done") {
            const doneTasks = document.getElementById("Done-tasks");
            doneTasks.appendChild(taskItem);
            newTaskTitleInput.value = '';
            newTaskDescriptionInput.value = '';
            backDrop.style.display = 'none';
            const doneTaskCount = doneTasks.getElementsByTagName('li').length;
            doneTasksNumber = `Number of tasks: ${doneTaskCount}`;
            
        }
    }
    if (newTaskTitle === '' || newTaskDescription === '') {
        if (newTaskTitle === '') {
            document.getElementById("New-task-title-input").style.borderColor = "red";
            fillTitleField.style.display = "block"
        }
        if (newTaskDescription === '') {
            document.getElementById("New-task-description-input").style.borderColor = "red";
            fillFieldDescription.style.display = "block"
        }
        return; 
    }
    if( backDrop.style.display = 'none'){
        fillFieldDescription.style.display = "none";
        document.getElementById("New-task-title-input").style.borderColor = "black";
         document.getElementById("New-task-description-input").style.borderColor = "black";
        fillTitleField.style.display = "none"
    }
    removeButtonRef.addEventListener("click", function () {
        const taskItem = removeButtonRef.closest('#task-item');
        if (taskItem) {
            taskItem.parentNode.removeChild(taskItem);
        
        }
    });
}


addTaskButtonRef.addEventListener("click", addingTask);





















