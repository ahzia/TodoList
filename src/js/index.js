import _ from 'lodash';
import '../css/style.css';
const todos=[{
  index:0,
  description: "New todo",
  completed: true
},
{
  index:1,
  description: "New todo",
  completed: false
},
{
  index:2,
  description: " todo",
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
    let todoCard = `<li id=${liId} class= "booklist" >
      <div class="text">`;
      if(completed){
        todoCard=todoCard+'<input type="checkbox" checked>'
      }
      else{
        todoCard=todoCard+'<input type="checkbox">'
      }
      todoCard=todoCard+ `<p>"${description}"</p>
      </div>
      </li>
      <hr>`;
    list.insertAdjacentHTML('beforeend', todoCard);
  });
  section.innerHTML = '';
  section.appendChild(list);
}
displayBooks(); 