import _ from 'lodash';
import '../css/style.css'
const todos=[{
  index:4,
  description: "todo 4",
  completed: true
},
{
  index:1,
  description: " todo 1",
  completed: false
},
{
  index:3,
  description: " todo 3",
  completed: true
},
]
function displayBooks() {
  const section = document.getElementById('todos');
  const list = document.createElement('ul');
  list.id = 'list';
  todos.forEach((todo) => {
    const {description,completed,index} = todo;
    const liId = `li${index}`;
    let todoCard = `<li id=${liId} class= "todo" >`;
      if(completed){
        todoCard=todoCard+'<input type="checkbox" checked>'
      }
      else{
        todoCard=todoCard+'<input type="checkbox">'
      }
      todoCard=todoCard+ `<p>${description}</p>
      </li>
      <hr>`;
    list.insertAdjacentHTML('beforeend', todoCard);
  });
  section.innerHTML = '';
  section.appendChild(list);
}

displayBooks();