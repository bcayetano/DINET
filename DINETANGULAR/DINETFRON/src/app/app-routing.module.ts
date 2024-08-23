import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { NewproductoComponent } from './producto/newproducto/newproducto.component';

const routes: Routes = [
  { path: 'producto', component: ProductoComponent },
  { path: 'producto/new', component: NewproductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
