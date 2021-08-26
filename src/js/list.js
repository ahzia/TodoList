export default class todoList {
  constructor() {
    this.todos = [];
    this.updateLocalStorage();
  }

addNew = (value) => {
  const index = this.todos.length;
  const newtodo = {
    index,
    description: value,
    completed: false,
  };
  this.todos.push(newtodo);
  this.updateLocalStorage(true, true);
}

sortList = () => {
  this.todos.sort((todoA, todoB) => {
    if (todoA.index < todoB.index) {
      return -1;
    }
    if (todoA.index > todoB.index) {
      return 1;
    }
    return 0;
  });
};

displayList = () => {
  const section = document.getElementById('todos');
  const list = document.createElement('ul');
  list.id = 'list';
  this.todos.forEach((todo) => {
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
  // eslint-disable-next-line no-use-before-define
  this.addCheckboxChangeEventListeners(this.todos);
};

updateLocalStorage = (update, sort, display = true) => {
  const listFromStorage = window.localStorage.getItem('todos');
  if (update) {
    // update local storage
    if (sort) {
      this.sortList();
    }
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
  } else if (listFromStorage != null) {
    // get data from local storage
    this.todos = JSON.parse(window.localStorage.getItem('todos'));
  } else {
    // inialize local storage
    this.sortList();
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  if (display) {
    this.displayList();
  }
};

updateStatus = (todos, index) => {
  this.todos[index].completed = !(todos[index].completed);
  this.updateLocalStorage(true, false, false);
};

addCheckboxChangeEventListeners = (todos) => {
  const checkboxes = document.querySelectorAll('input[type=checkbox][name=todoCheck]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const index = (event.target.id).replace('ch', '');
      this.updateStatus(todos, index);
    });
  });
};

arrangeTodos = () => {
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
      description: this.todos[newIndex].description,
      completed: this.todos[newIndex].completed,
    };
    temp.push(todo);
    index += 1;
  });
  this.todos = temp;
};
}
