import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../models/Product.model";
import {getProducts} from '../../assets/api/api.js'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 public products: ProductModel[] =[];

  constructor() { }

  getProducts(){
    getProducts()
      .then((products: ProductModel[]) => {
        this.products = products;
      })
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
