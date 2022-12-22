import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur-component',
  templateUrl: './convertisseur-component.component.html',
  styleUrls: ['./convertisseur-component.component.css']
})
export class ConvertisseurComponentComponent implements OnInit {

  test =500;
  montant : Number = 0;
  MontantConvert! : number;
  constructor() { }

  ngOnInit(): void {
  }
  convertDinarEuro(element : any) {
    this.MontantConvert = element;
}
}
