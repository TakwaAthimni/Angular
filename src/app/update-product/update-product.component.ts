import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
id!:Number;
  constructor(private actR:ActivatedRoute) { }

  ngOnInit(): void {
   //this.id= this.actR.snapshot.params['id'];

   this.actR.paramMap.subscribe(params=>this.id=Number(params.get('id')));
  }

}
