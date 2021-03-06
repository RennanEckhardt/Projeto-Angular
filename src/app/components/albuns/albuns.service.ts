import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albuns } from './albuns-creater/albuns.model';


@Injectable({
  providedIn: 'root'
})
export class AlbunsService {
  baseUrl="https://jsonplaceholder.typicode.com/albums"

  constructor(private http:HttpClient) {

   }
   read():Observable<Albuns[]>{
    return this.http.get<Albuns[]>(this.baseUrl)
   }
}
