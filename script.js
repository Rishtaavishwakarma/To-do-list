function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText === '') {
      alert('Please enter a task.');
      return;
    }

    const list = document.getElementById('todo-list');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // Add the task text as an editable input
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = todoText;
    taskInput.readOnly = true;

    // Add buttons for edit, delete, and assign
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.onclick = function () {
      if (taskInput.readOnly) {
        taskInput.readOnly = false;
        editButton.textContent = 'Save';
      } else {
        taskInput.readOnly = true;
        editButton.textContent = 'Edit';
      }
    };

    const assignButton = document.createElement('button');
    assignButton.textContent = 'Assign';
    assignButton.className = 'assign';
    assignButton.onclick = function () {
      const nextDay = prompt('Assign to next day. Enter a note or date:');
      if (nextDay) {
        alert(`Task assigned for: ${nextDay}`);
      }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      list.removeChild(listItem);
    };

    // Append elements to the list item
    listItem.appendChild(taskInput);
    listItem.appendChild(editButton);
    listItem.appendChild(assignButton);
    listItem.appendChild(deleteButton);

    // Append the list item to the list
    list.appendChild(listItem);

    // Clear the input
    input.value = '';
  }