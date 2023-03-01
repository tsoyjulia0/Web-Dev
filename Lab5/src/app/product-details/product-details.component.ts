import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, productList } from '../products';
import {Location} from "@angular/common";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() like = new EventEmitter<Product>();

  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private location: Location) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = productList.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  addLike(product: Product){
    if(product.like == 0){
      product.like = 1;
    } else{
      product.like = 0;
    }
  }

  removeItem(p: Product) {
    const ind = productList.findIndex(prod => prod.id === p.id);
    productList.splice(ind, 1);
    this.cartService.delItem(p);
    window.alert("Deleted!");
    this.location.back();
  }

}
