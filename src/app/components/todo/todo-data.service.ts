import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoItem, TodoList } from './models';

@Injectable()
export class TodoDataService {
  private count = 99;
  private  data: TodoList =  {
  items: [
    {id: '1', description: 'shovel snow', completed: false},
    {id: '2', description: 'change oil', completed: true},
  ]
};

private subject: BehaviorSubject<TodoList>;
constructor() {
  this.subject = new BehaviorSubject<TodoList>(this.data);
}

getListAsObservable(): Observable<TodoList> {
  return this.subject.asObservable();
}
getList(): TodoList {
  return { ... this.data};
}

addTodoItem(description: string) {
  const itemToAdd: TodoItem = {
    description,
    completed: false,
    id: (this.count++).toString()
  };

  this.data.items = [itemToAdd, ...this.data.items];
  this.subject.next(this.data);
}
}
