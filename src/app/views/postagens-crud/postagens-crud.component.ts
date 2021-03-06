import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postagens-crud',
  templateUrl: './postagens-crud.component.html',
  styleUrls: ['./postagens-crud.component.scss']
})
export class PostagensCrudComponent implements OnInit {

  constructor(private router:Router)
  { 

  }

  ngOnInit(): void {
  }
  navigateToPostagensCreate(): void {
    this.router.navigate(['/postagens/create'])
  }

}
