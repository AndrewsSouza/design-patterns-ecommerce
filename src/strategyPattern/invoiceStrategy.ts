import { PaymentMethodStrategy } from './paymentMethodStrategy'
import { PaymentMethod } from './paymentMethod'
import { Payment } from '../models/payment'

export class InvoiceStrategy implements PaymentMethodStrategy {

    executePayment(total: number): Payment {
        console.log('Valor: R$', total, ' - Pago com boleto bancário')
        return {
            total,
            method: PaymentMethod.INVOICE,
            success: true,
        }
    }
}