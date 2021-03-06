import { Component, OnInit } from '@angular/core';
import { PostagensServiceService } from '../postagens-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-postagens-create',
  templateUrl: './postagens-create.component.html',
  styleUrls: ['./postagens-create.component.scss']
})
export class PostagensCreateComponent implements OnInit {

  constructor(private PostagensServiceService:PostagensServiceService, private Router:Router
    
    ) { }

  ngOnInit(): void {
  }
  createpostagens():void{
    this.PostagensServiceService.showMessage('opreçao executada com sucesso');
  }

  cancelarpostagens():void{
    this.Router.navigate(['/postagens'])
  }

}

