const todoList = [
  {
    name: 'Kape',
    dueDate: '2025-010-19'
  },
  {
    name: 'Kape manen',
    dueDate: '2025-10-20'
  }
];

// renderTodoList();

function renderTodoList () {

  let todoListHTML = '';

  // This technique is called Generating HTML with Loops
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
      <div class="add-todo">${name}</div>
      <div class="add-dueDate">${dueDate}</div>
      <button onclick="todoList.splice(${i}, 1); 
      renderTodoList();">Delete
      </button> `;
    todoListHTML += html;

  }

  document.querySelector('.js-todo-list').innerHTML =  todoListHTML;
}
addToDo.renderTodoList();



function addToDo() {
  const inputElem = document.querySelector('.js-name-input');

  const name = inputElem.value;

  const dueDateInputElem = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInputElem.value;

  todoList.push(
    {
      // name: name,
      // dueDate: dueDate

      //short hand property syntax
      name, 
      dueDate
    }
    );

  inputElem.value = '';
  dueDateInputElem.value = '';

  renderTodoList();
}