const todoList = ['make coffee', 'Drink Coffee'];

// renderTodoList();

function renderTodoList () {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<div>${todo}</div>`;
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