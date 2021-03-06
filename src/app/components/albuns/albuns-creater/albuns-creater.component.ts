import { Component, OnInit } from '@angular/core';
import{AlbunsService} from '../albuns.service';
import { Albuns } from './albuns.model';

@Component({
  selector: 'app-albuns-creater',
  templateUrl: './albuns-creater.component.html',
  styleUrls: ['./albuns-creater.component.scss']
})
export class AlbunsCreaterComponent implements OnInit {
  albuns: Albuns[]
  constructor(private Albunsservi:AlbunsService) {}

  ngOnInit(): void {
    this.Albunsservi.read().subscribe(albuns=>{
      this.albuns=albuns
    })
  
  }
}
