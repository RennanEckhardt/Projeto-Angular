import { Component, OnInit } from '@angular/core';
import {todos} from './to-dos.model';
import{ToDoService} from '../to-do/to-do.service';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor(private ToDosService:ToDoService) { }
  todos: todos[]

  ngOnInit(): void {
    this.ToDosService.read().subscribe(todos=>{
      this.todos=todos
    }) 
  }

}
