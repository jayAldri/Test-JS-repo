const todoList = [];

// renderTodoList();

function renderTodoList () {

  let todoListHTML = '';

  // This technique is called Generating HTML with Loops
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<div style="border: 1px solid #ccc; padding: 8px; margin-bottom: 8px;">${todo}</div>`;
    todoListHTML += html;

  }

  document.querySelector('.js-todo-list').innerHTML =  todoListHTML;
}
addToDo.renderTodoList();



function addToDo() {
  const inputElem = document.querySelector('.js-name-input');

  const name = inputElem.value;

  todoList.push(name);

  inputElem.value = '';

  renderTodoList();
}