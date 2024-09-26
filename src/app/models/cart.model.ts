export interface Cart {
    items: Array<CartItem>;
}

export interface CartItem {
    id: number;

    product: string;
    name: string;
    price: number;
    quantity: number;
}
