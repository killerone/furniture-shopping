import { Product } from './product';

export class ShoppingCartItem {

    // quantity: number;
    constructor(public product: Product, public quantity: number, public key: string,public imgUrl:string) {}
    
    get totalPrice() { return this.product.price * this.quantity; }
  }
