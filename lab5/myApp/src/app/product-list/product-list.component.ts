import { Component } from '@angular/core';
import {categories, Category} from "../category";
import {ActivatedRoute} from "@angular/router";

// import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = [...products];
  category :  { id: number; name: string; products: {id: number, name: string, price: number, description: string, image: string, address: string, rating: string; }[] } | undefined
  constructor(private route : ActivatedRoute) {
  }

  removeProduct(ind : number){
    // @ts-ignore
    this.category.items = this.category.items.filter((x) => x.id !== ind);
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    this.category = categories.find(category => category.id === categoryIdFromRoute);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
