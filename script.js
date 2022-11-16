(function () {
  'use strict';

  let todos = [];
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

    todoInput.value = ' '
  };

  let render = function () {
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    let span = document.createElement('span');
    span.textContent = todoInput.value;

    let label = document.createElement('label');
    label.appendChild(checkBox);
    label.appendChild(span);

    let deletebtn = document.createElement('button');
    deletebtn.textContent = '削除';
    deletebtn.addEventListener('click', deleteItem);

    let listItem = document.createElement('li');
    listItem.appendChild(label);
    listItem.appendChild(deletebtn);

    todoList.appendChild(listItem);


  }

  let deleteItem = function (e) {
    let listItem = e.target.parentElement;
    todoList.removeChild(listItem);
  }

  todoForm.addEventListener('submit', addItem);
}());
