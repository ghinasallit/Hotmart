import {Component, OnInit} from '@angular/core';
import {getProducts, getUsers} from '../../assets/api/api.js'
import {UserModel} from "../../models/User.model";
import {forkJoin} from "rxjs";
import {ProductModel} from "../../models/Product.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: UserModel[] = [];

  constructor() {
  }

  public getUsersProducts() {
    forkJoin([getUsers(), getProducts()]).subscribe((res: any[]) => {
       res[0].map((user: UserModel) => {
        user['products'] = res[1].filter((product: ProductModel) => product.userId === user.id).length;
      });
      this.users = res[0];
    });
  }

  ngOnInit(): void {
    this.getUsersProducts();
  }

}
