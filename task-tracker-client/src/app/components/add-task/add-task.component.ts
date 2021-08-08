import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from './../../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAdd= new EventEmitter();
  text:string;
  day:string;
  reminder:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    if(this.text == ""){
      alert("Please enter a text")
      return
    }

    const NewTask = {
      text : this.text,
      day  : this.day,
      reminder : this.reminder
    }

    this.onAdd.emit(NewTask);

    this.text = "",
    this.day = "",
    this.reminder = true;

    
  }

}
