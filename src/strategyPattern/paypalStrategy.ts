import { PaymentMethodStrategy } from './paymentMethodStrategy'
import { Payment } from '../models/payment'
import { PaymentMethod } from './paymentMethod'

export class PaypalStrategy implements PaymentMethodStrategy {
    executePayment(total: number): Payment {
        console.log('Valor: R$', total, ' - Pago com paypal')
        return {
            total,
            method: PaymentMethod.PAYPAL,
            success: true,
        }
    }
}