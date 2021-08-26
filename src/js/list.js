let todos = [{
  index: 2,
  description: 'todo 4',
  completed: true,
},
{
  index: 0,
  description: ' todo 1',
  completed: false,
},
{
  index: 1,
  description: ' todo 3',
  completed: true,
},
];
const sortList = () => {
  todos.sort((todoA, todoB) => {
    if (todoA.index < todoB.index) {
      return -1;
    }
    if (todoA.index > todoB.index) {
      return 1;
    }
    return 0;
  });
};
const displayList = () => {
  const section = document.getElementById('todos');
  const list = document.createElement('ul');
  list.id = 'list';
  todos.forEach((todo) => {
    const { description, completed, index } = todo;
    const liId = `li${index}`;
    const checkboxId = `ch${index}`;
    let todoCard = `<li id=${liId} class="todo draggable" draggable="true"><div class="todoContent">`;
    if (completed) {
      todoCard += `<input type="checkbox" name="todoCheck" checked id="${checkboxId}">`;
    } else {
      todoCard += `<input type="checkbox" name="todoCheck" id="${checkboxId}">`;
    }
    todoCard += `
      <p>${description}</p>
      </div>
      <div class="draggableAria">
        <i class="fas fa-ellipsis-v"></i>
      <div>
      </li>`;
    list.insertAdjacentHTML('beforeend', todoCard);
  });
  section.innerHTML = '';
  section.appendChild(list);
  addCheckboxChangeEventListeners(todos);
};
const updateLocalStorage = (update, sort, display = true) => {
  const listFromStorage = window.localStorage.getItem('todos');
  if (update) {
    // update local storage
    if (sort) {
      sortList();
    }
    window.localStorage.setItem('todos', JSON.stringify(todos));
  } else if (listFromStorage != null) {
    // get data from local storage
    todos = JSON.parse(window.localStorage.getItem('todos'));
  } else {
    // inialize local storage
    sortList();
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }
  if (display) {
    displayList();
  }
};

const updateStatus = (todos, index) => {
  todos[index].completed = !(todos[index].completed);
  updateLocalStorage(true, false, false);
};

const addCheckboxChangeEventListeners = (todos) => {
  const checkboxes = document.querySelectorAll('input[type=checkbox][name=todoCheck]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const index = (event.target.id).replace('ch', '');
      updateStatus(todos, index);
    });
  });
};

const arrangeTodos = () => {
  const container = document.getElementById('list');
  const children = container.childNodes;
  const childarray = [...children];
  let index = 0;
  const temp = [];
  childarray.forEach((item) => {
    const { id } = item;
    let newIndex = ((id).replace('li', '')).replace('li', '');
    newIndex = (newIndex).replace('li', '');
    const todo = {
      index,
      description: todos[newIndex].description,
      completed: todos[newIndex].completed,
    };
    temp.push(todo);
    index += 1;
  });
  todos = temp;
};

export { updateLocalStorage, arrangeTodos };
