import { Component, OnInit } from '@angular/core';
import { Actor } from '../model/actor.model';

@Component({
  selector: 'app-actors-component',
  templateUrl: './actors-component.component.html',
  styleUrls: ['./actors-component.component.css']
})
export class ActorsComponentComponent implements OnInit {

  constructor() { }
  listActors: Actor[]=[
    {'lastName':'Robert','firstName':'Julia'},
    {'lastName':'Walker','firstName':'Paul'},
    {'lastName':'Pitt','firstName':'Brad'}
  ]
  ngOnInit(): void {
  }
  Delete(element : any){
    this.listActors = this.listActors.filter(e => e != element);
   }

}
