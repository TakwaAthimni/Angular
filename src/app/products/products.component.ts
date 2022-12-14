import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/core/model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ProductList! : Product[]
    //  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
   // {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
 // {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
  //];
  prix!:number;
  constructor(private R : Router , private prod :ProductService) { }

  ngOnInit(): void {
   // this.ProductList=this.prod.List;
  this.prod.getProducts().subscribe(
    (data:Product[])=> this.ProductList=data);
    
  //data => { console.log(data)};
  }

  like(indice:number){

    this.ProductList[indice].like ++;
  }
buy (indice:number){
  this.ProductList[indice].quantity --;

}
routage(){
  this.R.navigate(['user']);
}
edit(id:any){
  this.R.navigate(['editProduct',id]);

}
}
