// this function gets the task from input //
function get_todos() { 
    var todos = new Array; // creates an array if tasks that ar inputed 
    var todos_str = localStorage.getItem('todo'); // this is the web browser memory 
    if (todos_str !== null) { // if the input is not null then json.parse will communicate with the web browser to make the task a javascript object 
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// this adds the inputed task to the get_todos function array 
function add() {
    var task = document.getElementById('task').value; // creates a variable of inputed tasks
    var todos = get_todos();
    todos.push(task); // adds a new task at the end of the array 
    localStorage.setItem('todo', JSON.stringify(todos)); // converts the task input to a JSON string 
    document.getElementById("task").value = "";
    show();
    return false;
}

//this function keeps the tasks permanetly displayed on the screen 
function show() {
    var todos = get_todos(); // gets the task that was retrieved as a variable
    var html = '<ul>'; // sets up each task as an unordered list 
    for (var i = 0; i < todos.length; i++) { // displays the task list in the order it was inputed 
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>' // displays the task list and creates the button with the"x"
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html; // displays the task list 
    var buttons = document.getElementsByClassName('remove'); 
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove); // once you click x the item will be removed 
    };
}
document.getElementById('add').addEventListener('click', add); // displays the inputed task when the add item button is clicked 
show(); // this will keep the inputs displayed permanetly on the screen 

// this will remove the task once they are added 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}