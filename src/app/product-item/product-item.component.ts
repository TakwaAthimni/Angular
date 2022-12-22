import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/core/model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()productItem !: Product;
  @Input()prix!:Number;
  constructor(private prod:ProductService) { }

  ngOnInit(): void {
  }
  Like(id:number){ 

  }

  Buy(id:number)
  {

  }
  updateProduct(id:number){}
  deleteProduct(id:number){}

}
