import '../css/style.css';

const todos = [{
  index: 4,
  description: 'todo 4',
  completed: true,
},
{
  index: 1,
  description: ' todo 1',
  completed: false,
},
{
  index: 3,
  description: ' todo 3',
  completed: true,
},
];
const sortBooks = () => {
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
const displayBooks = () => {
  sortBooks();
  const section = document.getElementById('todos');
  const list = document.createElement('ul');
  list.id = 'list';
  todos.forEach((todo) => {
    const { description, completed, index } = todo;
    const liId = `li${index}`;
    let todoCard = `<li id=${liId} class= "todo" >`;
    if (completed) {
      todoCard += '<input type="checkbox" checked>';
    } else {
      todoCard += '<input type="checkbox">';
    }
    todoCard += `<p>${description}</p>
    </li>
    <hr>`;
    list.insertAdjacentHTML('beforeend', todoCard);
  });
  section.innerHTML = '';
  section.appendChild(list);
};
displayBooks();