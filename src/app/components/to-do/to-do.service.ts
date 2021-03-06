import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todos } from './to-dos.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  baseUrl="https://jsonplaceholder.typicode.com/todos"

  constructor(private http:HttpClient) { }
  read():Observable<todos[]>{
    return this.http.get<todos[]>(this.baseUrl)
   }
}




