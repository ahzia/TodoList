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

remove = (index) => {
  this.todos.splice(index, 1);
  const temp = [];
  let counter = 0;
  this.todos.forEach((item) => {
    const todo = {
      index: counter,
      description: item.description,
      completed: item.completed,
    };
    temp.push(todo);
    counter += 1;
  });
  this.todos = temp;
  this.updateLocalStorage(true, false);
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
    const inputId = `in${index}`;
    const moveDiv = `mv${index}`;
    const deleteDiv = `del${index}`;
    let todoCard = `<li id=${liId} class="todo draggable" draggable="true"><div class="todoContent">`;
    if (completed) {
      todoCard += `<input type="checkbox" name="todoCheck" class="todoCheck" checked id="${checkboxId}">`;
    } else {
      todoCard += `<input type="checkbox" name="todoCheck" class="todoCheck" id="${checkboxId}">`;
    }
    todoCard += `
      <input class="description" id="${inputId}" value="${description}">
      </div>
      <div id="${moveDiv}" class="draggableAria">
        <i class="fas fa-ellipsis-v"></i>
      <div>
      <div id="${deleteDiv}" class="deleteDiv hidden">
        <i id="i${deleteDiv}" class="fas fa-trash-alt"></i>
      <div>
      </li>`;
    list.insertAdjacentHTML('beforeend', todoCard);
  });
  section.innerHTML = '';
  section.appendChild(list);
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

arrangeTodos = () => {
  const container = document.getElementById('list');
  const children = container.childNodes;
  const childarray = [...children];
  let index = 0;
  const temp = [];
  childarray.forEach((item) => {
    const { id } = item;
    const newIndex = ((id).replace('li', '')).replace('li', '');
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
