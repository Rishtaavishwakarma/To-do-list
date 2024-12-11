function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoCategory = document.getElementById('todoCategory');
    const day1List = document.getElementById('day1List');
    const day2List = document.getElementById('day2List');

    const task = todoInput.value.trim();
    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = task;
    listItem.draggable = true;
    listItem.id = `task-${Date.now()}`; // Unique ID
    listItem.ondragstart = drag;

    if (todoCategory.value === 'day1') {
        day1List.appendChild(listItem);
    } else {
        day2List.appendChild(listItem);
    }

    todoInput.value = '';
}

function allowDrop(event) {
    event.preventDefault();
    event.currentTarget.classList.add('over');
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
    event.preventDefault();
    event.currentTarget.classList.remove('over');
    const data = event.dataTransfer.getData('text');
    const draggedItem = document.getElementById(data);

    if (draggedItem && event.target.tagName === 'UL') {
        event.target.appendChild(draggedItem);
    }
}