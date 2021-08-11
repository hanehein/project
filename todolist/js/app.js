// UI
const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.getElementById('filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

function addtask(e){
    // console.log('hey');

// else နဲ့ေရး ချင်လဲရတယ်။
    // if(taskinput.value === ''){
    //     window.alert("Add a task");
    // }else{

    if(taskinput.value === ''){
        window.alert("Add a task");
        return;
    }

    // console.log(taskinput.value);

    // create li element
    const li  = document.createElement('li');

    // add class
    // li.classList.add('collection-item');
    li.className = "collection-item";

    // create text node append to li
    li.appendChild(document.createTextNode(taskinput.value));

    // create link
    const link = document.createElement('a');

    // add class
    link.className = "delete-item secondary-content";

    // add  icon
    link.innerHTML = `<i class="far fa-trash-alt"></i>`;

    // console.log(link);

    // append link to li
    li.appendChild(link);

    // append li to ul
    tasklist.appendChild(li);

    // console.log(li);

    // store in localstorage
    storetaskinlocalstorage(taskinput.value);

    e.preventDefault();

// else ထည့်ခဲ့ရင် } လေးပိတ်ဖို့လို
    // }
}

//remove tag function
function removetask(e){
    // console.log(e.target);

    // console.log(e.target.parentElement);
        //i      a
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete-item');

        if(confirm('Are You Sure')){
            //i       a             li
            e.target.parentElement.parentElement.remove();
        }
    }
}

// // clear task function
function cleartasks(){
    // console.log('hey');

    //Method 1
    // tasklist.innerHTML='';

    //Method 2
    // console.log(tasklist.childElementCount);
    // let x = 0;
    // while(x < tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
    // }

    //Method 3
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
}

// Store Task
function storetaskinlocalstorage(task){
    // console.log('task');

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        //console.log(typeof tasks);
    }

    tasks.push(task);
    //console.log(tasks);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event Listener
// Add task 
form.addEventListener('submit', addtask);

// Remove task
tasklist.addEventListener('click',removetask);

// Clear task
clearbtn.addEventListener('click',cleartasks);