import { Component } from "@angular/core";

import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MatTreeModule } from "@angular/material/tree";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { Cart } from "./models/cart.model";
import { CartService } from "./services/cart.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatTreeModule,

    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    HeaderComponent,
    HomeComponent,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {

  cart: Cart = { items: [] };

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }
}
