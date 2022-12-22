import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponentComponent } from './actor-component/actor-component.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ErrorPComponent } from './error-p/error-p.component';
import { FormulaireProductComponent } from './formulaire-product/formulaire-product.component';
import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsComponent } from './products/products.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'User', component:UserComponent},
  {path:'editProduct/:id', component:UpdateProductComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'formulaireProduct', component:FormulaireProductComponent},
  {path:'productitem', component:ProductItemComponent},
  {path:'convertisseur', component:ConvertisseurComponentComponent},
  {path:'toEuroConvert', component:ToEuroConvertComponentComponent},
  {path:'actor', component:ActorComponentComponent},
  {path:'actors', component:ActorsComponentComponent},



  {path:'***', component:ErrorPComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
