import { PaymentMethodFactory } from '../factoryPattern/paymentMethodFactory'
import { EventEmitter } from 'events'
import { Product } from '../models/product'
import { addProductEventName, AddProductEvent } from '../observerPattern/addProductEvent'
import { PaymentMethod } from '../strategyPattern/paymentMethod'
import { BasketSingleton } from '../observerPattern/basket'
import { productsList } from '../mocks/products'
import { Payment } from '../models/payment'

export class EcommerceFacade {
    eventManager: EventEmitter
    paymentFactory: PaymentMethodFactory

    constructor(eventManager: EventEmitter) {
        this.eventManager = eventManager
        this.paymentFactory = new PaymentMethodFactory()
    }

    getProducts(): Product[] {
        return productsList
    }

    addProduct(productId: number): Product {
        const product = productsList.find(prd => prd.id === productId)

        if (!product) {
            return null
        }

        const event = new AddProductEvent(product)
        this.eventManager.emit(addProductEventName, event)

        return product
    }

    getPaymentMethods(): PaymentMethod[] {
        return [
            PaymentMethod.INVOICE,
            PaymentMethod.DEBIT,
            PaymentMethod.CREDIT,
            PaymentMethod.PAYPAL,
        ]
    }

    executePayment(method: PaymentMethod): Payment {
        const strategy = this.paymentFactory.createInstance(method)
        const totalValue = BasketSingleton.getInstance().getTotal()

        return strategy.executePayment(totalValue)
    }
}