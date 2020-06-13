import { PaymentMethod } from "../strategyPattern/paymentMethod"

export class Payment {
    total: number
    success: boolean
    method: PaymentMethod

    constructor(total: number, method: PaymentMethod, success: boolean){
        this.total = total
        this.method = method
        this.success = success
    }
}