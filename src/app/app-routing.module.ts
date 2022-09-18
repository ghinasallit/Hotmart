import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {ProductsComponent} from "./products/products.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
