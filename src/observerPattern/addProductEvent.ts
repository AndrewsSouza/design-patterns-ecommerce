import { Product } from '../models/product'

export class AddProductEvent {
    product: Product;

    constructor(product: Product) {
        this.product = product
    }
}

export const addProductEventName = 'added-product'