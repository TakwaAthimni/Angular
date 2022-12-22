import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ErrorPComponent } from './error-p/error-p.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormulaireProductComponent } from './formulaire-product/formulaire-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';
import { ActorComponentComponent } from './actor-component/actor-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    UserComponent,
    ErrorPComponent,
    UpdateProductComponent,
    AddProductComponent,
    FormulaireProductComponent,
    ProductItemComponent,
    ConvertisseurComponentComponent,
    ToEuroConvertComponentComponent,
    ActorsComponentComponent,
    ActorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
