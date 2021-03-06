import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagensCreateComponent } from './components/postagens/postagens-create/postagens-create.component';
import { HomeComponent } from "./views/home/home.component";
import { PostagensCrudComponent } from './views/postagens-crud/postagens-crud.component';
import { AlbunsCreaterComponent } from './components/albuns/albuns-creater/albuns-creater.component';
import { ToDoComponent } from './components/to-do/to-do.component';

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
  },
  {
   path:"postagens",
   component: PostagensCrudComponent 
  },
  {
    path:"postagens/create",
    component:PostagensCreateComponent
  },
  {
    path:"albuns",
    component:AlbunsCreaterComponent
  },
  {
    path:"to-dos",
    component:ToDoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
