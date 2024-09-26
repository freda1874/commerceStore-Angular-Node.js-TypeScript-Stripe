import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { Product } from "../../../../models/product.model";

@Component({
  selector: "app-product-box",
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule],
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  @Input() product: Product | undefined;


  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }


};


