import { PaymentMethodStrategy } from './paymentMethodStrategy'
import { Payment } from '../models/payment'
import { PaymentMethod } from './paymentMethod'

export class CreditStrategy implements PaymentMethodStrategy {
    executePayment(total: number): Payment {
        console.log('Valor: R$', total, ' - Pago com cartão de crédito')
        return {
            total,
            method: PaymentMethod.CREDIT,
            success: true,
        }
    }
}