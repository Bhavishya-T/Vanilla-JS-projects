const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const tasklist = document.querySelector(".collection");
const filter = document.querySelector("#filter");

loadEventListeners();

function loadEventListeners(){
    form.addEventListener("submit", addTask);
    tasklist.addEventListener("click", deleteTask);
    filter.addEventListener("keyup", filterTasks);
}

function addTask(e){
    if(taskInput.value ===""){
        alert("Add a task");
    }

    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    tasklist.appendChild(li);

    taskInput.value="";
    
    e.preventDefault();
}

function deleteTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }
}

function filterTasks(e){
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.includes(e.target.value)){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
}

