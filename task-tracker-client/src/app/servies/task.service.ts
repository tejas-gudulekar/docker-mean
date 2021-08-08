import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Task} from './../../Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>('http://localhost:3000/tasks')
  }

  addTask(task){
    console.log(`Task : ${task}`)
    return this.http.post( `http://localhost:3000/addTask` , task, {headers : new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })});
  }

  deleteTask(task){
    return this.http.get(`http://localhost:3000/deleteTask/${task._id}`)
  }

  updateTask(task){
    console.log(task);
    return this.http.get(`http://localhost:3000/updateTask/${task._id}/${task.reminder}`)
  }
}
