import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { QlspComponent } from './qlsp/qlsp.component';
const routes: Routes = [
  { path: 'product-add', component: ProductAddComponent},
  { path: 'about', component: AboutComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'qlsp', component: QlspComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
