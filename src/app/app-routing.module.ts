import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPComponent } from './error-p/error-p.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'User', component:UserComponent},
  {path:'***', component:ErrorPComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
