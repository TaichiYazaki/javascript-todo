(function () {
  'use strict';

  let todos = localStorage.getItem('todos');
  if(todos) {
    todos = JSON.parse(todos);
  }else{
    todos = [];
  }
  let todoForm = document.getElementById('todo-form');
  let todoList = document.getElementById('todo-list');
  let todoInput = document.querySelector('#todo-form input')

  let addItem = function (e) {
    //画面の遷移を制御する
    e.preventDefault();

    if (!todoInput.value) {
      return;
    }

    todos.push({ text: todoInput.value, done: false });
    render();

    todoInput.value = ''
  };

  let render = function () {
    todoList.innerHTML = '';
    todos.forEach(function (todo) {
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.checked = todo.done;
      checkBox.addEventListener('chenge', function (e) {
        todo.done = e.target.checked;
      })

      let span = document.createElement('span');
      span.textContent = todo.text;

      let label = document.createElement('label');
      label.appendChild(checkBox);
      label.appendChild(span);

      let deletebtn = document.createElement('button');
      deletebtn.textContent = '削除';
      deletebtn.addEventListener('click', function () {
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
        render();
      });

      let listItem = document.createElement('li');
      listItem.appendChild(label);
      listItem.appendChild(deletebtn);

      todoList.appendChild(listItem);

      localStorage.setItem('todos', JSON.stringify(todos));
    });
  }

  let deleteItem = function (e) {
    let listItem = e.target.parentElement;
    todoList.removeChild(listItem);
  }

  todoForm.addEventListener('submit', addItem);
  
  render();
}());
