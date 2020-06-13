import { Payment } from "../models/payment";

export interface PaymentMethodStrategy {
    executePayment(total: number): Payment;
}