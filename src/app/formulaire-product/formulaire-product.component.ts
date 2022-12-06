import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formulaire } from '../model/formulaire.model';

@Component({
  selector: 'app-formulaire-product',
  templateUrl: './formulaire-product.component.html',
  styleUrls: ['./formulaire-product.component.css']
})
export class FormulaireProductComponent implements OnInit {
formulaire!:Formulaire
  constructor() {
    this.formulaire= new Formulaire;
   }

  ngOnInit(): void {
  }
  Ajouter(form:NgForm){
    console.log(this.formulaire)
  }

}
