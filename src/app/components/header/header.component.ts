import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { Cart, CartItem } from "../../models/cart.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    CommonModule,
  ],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {

  private _cart: Cart = { items: [] };

  itemQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart: Cart) {
    this._cart = cart;

    this.itemQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }


  constructor(private _cartService: CartService) { }
  getTotal(items: Array<CartItem>): number {
    return this._cartService.getTotal(items);
  }

  onClearCart() {
    this._cartService.clearCart();
  }
}
