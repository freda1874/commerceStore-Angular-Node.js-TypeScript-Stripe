import { Component, EventEmitter, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: "app-products-header",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = "desc";
  itemShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number): void {
    this.itemsCountChange.emit(count);
    this.itemShowCount = count;
  }

  onColumnsUpdated(columnsNum: number): void {
    this.columnsCountChange.emit(columnsNum);
  }
}
