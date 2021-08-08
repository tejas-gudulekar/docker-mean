import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from './../../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task;
  @Output() deleteTask = new EventEmitter()
  @Output() updateTask = new EventEmitter()

  faTImes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task){
    this.deleteTask.emit(task); 
  }

  onClick(task){
    this.updateTask.emit(task);
  }

  



}
