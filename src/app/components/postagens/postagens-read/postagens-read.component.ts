import { Component, OnInit } from '@angular/core';
import { PostagensServiceService } from '../postagens-service.service';
import { Postagens } from '../postagens.model';

@Component({
  selector: 'app-postagens-read',
  templateUrl: './postagens-read.component.html',
  styleUrls: ['./postagens-read.component.scss']
})
export class PostagensReadComponent implements OnInit {

  postagens: Postagens[]
  panelOpenState = false

  constructor(private postagensService:PostagensServiceService) { }

  ngOnInit(): void {
    this.postagensService.read().subscribe(postagens=>{
      this.postagens=postagens
    })
  }

}
