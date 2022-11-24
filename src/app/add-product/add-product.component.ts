import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/core/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
//product!:Product;
product:Product={id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0};

  constructor() { }

  ngOnInit(): void {
  }
  save(F:NgForm){
    console.log(F);
    console.log(F.controls['title'].value);
    console.log(F.value);
  }

}
