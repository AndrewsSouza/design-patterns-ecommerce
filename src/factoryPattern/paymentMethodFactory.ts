import { PaymentMethod } from '../strategyPattern/paymentMethod'
import { PaymentMethodStrategy } from '../strategyPattern/paymentMethodStrategy'
import { InvoiceStrategy } from '../strategyPattern/invoiceStrategy'
import { CreditStrategy } from '../strategyPattern/creditStrategy'
import { DebitStrategy } from '../strategyPattern/debitStrategy'
import { PaypalStrategy } from '../strategyPattern/paypalStrategy'

const InstanceManager = {
    [PaymentMethod.INVOICE]: () => new InvoiceStrategy(),
    [PaymentMethod.CREDIT]: () => new CreditStrategy(),
    [PaymentMethod.DEBIT]: () => new DebitStrategy(),
    [PaymentMethod.PAYPAL]: () => new PaypalStrategy(),
}

export class PaymentMethodFactory {
    createInstance(tpPagamento: PaymentMethod): PaymentMethodStrategy {
        return InstanceManager[tpPagamento.toString()]()
    }
}