import { PaymentMethodStrategy } from './paymentMethodStrategy'
import { Payment } from '../models/payment'
import { PaymentMethod } from './paymentMethod'

export class DebitStrategy implements PaymentMethodStrategy {
    executePayment(total: number): Payment {
        console.log('Valor: R$', total, ' - Pago com cartão de débito')
        return {
            total,
            method: PaymentMethod.DEBIT,
            success: true,
        }
    }
}