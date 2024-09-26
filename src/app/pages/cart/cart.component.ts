import { Component } from "@angular/core";
import { Cart, CartItem } from "../../models/cart.model";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { CartService } from "../../services/cart.service";
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, RouterModule, MatTableModule, MatIconModule],
  templateUrl: "./cart.component.html",
})
export class CartComponent {
  cart: Cart = {
    items: []
  };

  dataSource: Array<CartItem> = [];

  displayColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private _cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    this._cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });

  }

  getTotal(items: Array<CartItem>): number {
    return this._cartService.getTotal(items);
  }

  onClearCart(): void {
    this._cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this._cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this._cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this._cartService.removeQuantity(item)
  }

  onCheckout(): void {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items,
    })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe('pk_test_51Q3Jxk03HnVIxjh5pmvQ6qdDtoNdEcjE9ybrV2yGeVK1Fh2rpbXaMZjYJeVdejycFUnMKi852QW49ljEZk9cKYjQ000aMPczbB');
        stripe?.redirectToCheckout({ sessionId: res.id, })
      })
  }
};



