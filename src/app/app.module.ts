import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule} from '@angular/material/card';
import { PostagensCrudComponent } from './views/postagens-crud/postagens-crud.component';
import { CoresDirective } from './directives/cores.directive';
import { ForDirective } from './directives/for.directive';
import { PostagensCreateComponent } from './components/postagens/postagens-create/postagens-create.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/Button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { PostagensReadComponent } from './components/postagens/postagens-read/postagens-read.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AlbunsComponent } from './views/albuns/albuns.component';
import { AlbunsCreaterComponent } from './components/albuns/albuns-creater/albuns-creater.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ToDosComponent } from './views/to-dos/to-dos.component';
import { ToDoComponent } from './components/to-do/to-do.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PostagensCrudComponent,
    CoresDirective,
    ForDirective,
    PostagensCreateComponent,
    PostagensReadComponent,
    AlbunsComponent,
    AlbunsCreaterComponent,
    ToDosComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatExpansionModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
