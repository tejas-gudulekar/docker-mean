import { Component, OnInit } from '@angular/core';
import { Task } from './../../../Task';
import { TaskService } from './../../servies/task.service';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css'],
})
export class TaskComponentComponent implements OnInit {
  Tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.Tasks = tasks));
  }

  addTask(task){
    this.Tasks.push(task);
    this.taskService.addTask(task).subscribe();
  }

  deleteTask(task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.Tasks = this.Tasks.filter((t) => t._id !== task._id);
    });
  }

  updateTaskReminder(task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe()
  }
}
