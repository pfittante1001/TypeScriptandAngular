import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {
@Output() itemAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  addItem(item: HTMLInputElement) {
    console.log(item.value);
    this.itemAdded.emit(item.value);
    item.value = '';
    item.focus();
    // put cursor back in focus
  }
}
