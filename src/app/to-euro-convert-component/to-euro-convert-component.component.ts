import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert-component',
  templateUrl: './to-euro-convert-component.component.html',
  styleUrls: ['./to-euro-convert-component.component.css']
})
export class ToEuroConvertComponentComponent implements OnInit {

  @Input() filsproperty : any;

  @Output() conversion = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  filspropertyConverted : Number = 0;
  convert() {
    this.filspropertyConverted = this.filsproperty * 3 ;
    this.conversion.emit("the conversion:" + this.filspropertyConverted + "euros");

  }

}
