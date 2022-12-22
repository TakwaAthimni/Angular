import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../model/actor.model';

@Component({
  selector: 'app-actor-component',
  templateUrl: './actor-component.component.html',
  styleUrls: ['./actor-component.component.css']
})
export class ActorComponentComponent implements OnInit {

  @Input()actorItem !: Actor;
  @Output() sender = new  EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteActor(actorItem : Actor){
    this.sender.emit(actorItem);
  }

}
