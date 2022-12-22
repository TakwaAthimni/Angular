import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/core/model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


product={id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0};
listP !: Product[];
  constructor( private prod :ProductService , R :Router) { }

  ngOnInit(): void {
    //this.prod.getProducts().subscribe(
     // data  => {this.listP = data;},
    //);

  }
  save(F:NgForm){

    //console.log(F.controls['title'].value);
   //console.log(F.value);
    this.product.id = this.prod.List.length +1 ;
    this.prod.addProducts(this.product);
    console.log(this.product);

  //  F.value['id'] = this.listP.length +1 ;
//this.prod.addProduct(this.product)
//console.log(this.listP);

//this.prod.addProduct(F.value).subscribe(
  //data => {alert("produit ajouter ");
  //this.R.navigate(['products'])},
//);
  }

}
