import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoList } from '../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: TodoList = {
    items: [
      {id: '1', description: 'shovel snow', completed: false},
      {id: '2', description: 'change oil', completed: true},
    ]
  };
  constructor() { }

  ngOnInit() {
  }
markCompleted(item: TodoItem) {
  item.completed = true;
}
}
