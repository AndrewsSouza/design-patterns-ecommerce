import { AddProductObserver } from './addProductObserver'
import { AddProductEvent } from './addProductEvent'
import { Product } from '../models/product'

export class BasketSingleton implements AddProductObserver {
    private static instance: BasketSingleton
    products: Product[]

    private constructor() {
        this.products = []
    }

    static getInstance() {
        if (!BasketSingleton.instance) {
            BasketSingleton.instance = new BasketSingleton()
        }

        return BasketSingleton.instance
    }

    getTotal() {
        return this.products.reduce((acc: number, nextProduct: Product) => {
            return acc + nextProduct.price
        }, 0)
    }

    update(event: AddProductEvent) {
        console.log('Produto adicionado: ', event.product.name)
        this.products.push(event.product)
    }
}