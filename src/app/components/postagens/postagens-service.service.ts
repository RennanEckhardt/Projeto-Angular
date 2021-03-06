import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Postagens }  from './postagens.model';


@Injectable({
  providedIn: 'root'
})
export class PostagensServiceService {
  baseUrl="https://jsonplaceholder.typicode.com/posts"

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }
  showMessage(msg:string):void{
   this.snackBar.open(msg,'ABREIUMENSAGEM', {
     duration:3000,
     horizontalPosition:"right",
     verticalPosition:"top"
   })
  }

  create(postagens: Postagens):Observable<Postagens>{
    return this.http.post<Postagens>(this.baseUrl,postagens)
  }
 read():Observable<Postagens[]>{
   return this.http.get<Postagens[]>(this.baseUrl)
 }
}

