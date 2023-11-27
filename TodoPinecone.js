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
const state ={
    tasks : [],
};
function render(){
    console.log(state.tasks)
    const taskList = document.getElementById('task-list')
    taskList.innerHTML = '';
    state.tasks.forEach((task) => {
        // CREATING
        const taskItem = document.createElement('li');
        taskItem.setAttribute("id","task-item")
        const checkButtonRef = document.createElement("button")
        checkButtonRef.setAttribute("id","check-button")
        checkButtonRef.innerHTML += ` <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        <path
          d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"
        ></path>
         </svg>`
        //  details
         const details = document.createElement("div")
         details.setAttribute("class","Details")
         const taskTitle = document.createElement("h4")
         taskTitle.innerText = "Todo"
         const textNote = document.createElement("p")
         textNote.innerText = "This is todo list"
         const priority = document.createElement("div")
         priority.setAttribute("class", priority)
         priority.innerText = "High"
        
        //  actions
        const actions = document.createElement("div")
        actions.setAttribute("class" ,"actions")
        const removeButtonRef = document.getElementById("remove-button")
        removeButtonRef.innerHTML += `<svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 384 512"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>`
        const editButton = document.createElement("div")
        editButton.setAttribute("id", "edit-button")
        editButton.innerHTML += `<svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
        />
      </svg>`
        


        //  APPENDING
         


        
    })
}
// Making done a task with x button
const removeButtonRef = document.getElementById("done-button")
removeButtonRef.addEventListener("click", function(){
    
        toDoTasks.splice()
        
})

function