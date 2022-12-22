import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/core/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  List : Product[]=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},];
  constructor(private http:HttpClient){}
  Url:string='localhost:3000/products';


getProducts():Observable<Product[]> {
//return this.List;
return this.http.get<Product[]>(this.Url);}

addProducts(P:Product){
  this.List.push(P);
}
deleteProduct(i:number){
  //delete from liste
}


 // getProducts(): Observable <any[]>{
   // return this.httpclient.get<any[]>(this.configUrl);
  //}
  getProductById(id:number): Observable <Product>{
  return this.http.get<any>(this.Url+'/'+ id );
  }
  //addProduct(id:number): Observable <Product>{
    //return this.httpclient.post<any>(this.configUrl+'/'+ id );
  //}

}
