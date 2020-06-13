import express = require('express')

import { EventEmitter } from 'events'

import { AddProductSubject } from './observerPattern/addProductSubject'
import { BasketSingleton } from './observerPattern/basket'
import { EcommerceFacade } from './facadePattern/ecommerceFacade'
import { PaymentMethod } from './strategyPattern/paymentMethod'

const eventManager = new EventEmitter()
const addProductSubject = new AddProductSubject(eventManager)
const facade = new EcommerceFacade(eventManager)

addProductSubject.addObserver(BasketSingleton.getInstance())

const app = express()
app.use(express.json())

app.get('/products', (req: express.Request, res: express.Response) => {
    res.json(facade.getProducts())
})

app.post('/basket/:id', (req: express.Request, res: express.Response) => {
    const { id } = req.params

    const product = facade.addProduct(Number(id))

    if (!product) {
        res.status(400).json({ message: "Falha ao adicionar este produto" })
    }

    return res.json({ message: 'Produto adicionado com sucesso', ...product })
})

app.get('/payment/methods', (req: express.Request, res: express.Response) => {
    return res.json(facade.getPaymentMethods())
})

app.post('/payment/execute', (req: express.Request, res: express.Response) => {
    const { paymentMethod } = req.body

    const paymentMethodEnum = PaymentMethod[String(paymentMethod).toUpperCase()]

    if(!paymentMethodEnum){
        return res.json({ message: "Falha no pagamento. Problemas com o modo de pagamento!" })
    }

    const { success, total, method } = facade.executePayment(paymentMethodEnum)

    return success ?
        res.json({
            message: "Pagamento realizado com sucesso",
            total: `R$ ${total.toFixed(2)}`,
            method: method.toString().toLowerCase(),
        }) :
        res.json({ message: "Falha no pagamento" })
})

app.listen(3333)