document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const taskText = todoInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <div>
                    <button class="btn btn-sm btn-success complete-btn mr-2">Complete</button>
                    <button class="btn btn-sm btn-warning edit-btn mr-2">Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn">Delete</button>
                </div>
            `;

            // Mark task as completed
            listItem.querySelector('.complete-btn').addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            // Delete task
            listItem.querySelector('.delete-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                listItem.remove();
            });

            // Edit task
            listItem.querySelector('.edit-btn').addEventListener('click', () => {
                const taskTextEl = listItem.querySelector('.task-text');
                const currentText = taskTextEl.textContent;
                const newText = prompt("Edit your task:", currentText);
                if (newText !== null && newText.trim() !== "") {
                    taskTextEl.textContent = newText.trim();
                }
            });

            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });
});
