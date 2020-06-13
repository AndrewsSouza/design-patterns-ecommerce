import { AddProductObserver } from './addProductObserver'
import { AddProductEvent, addProductEventName } from './addProductEvent'
import { EventEmitter } from 'events'

export class AddProductSubject {
    observers: AddProductObserver[]
    eventManager: EventEmitter

    constructor(eventManager: EventEmitter) {
        this.eventManager = eventManager
        this.eventManager.on(addProductEventName, (event: AddProductEvent) => {
            this.notify(event)
        })

        this.observers = []
    }

    addObserver(observer: AddProductObserver) {
        this.observers.push(observer)
    }

    notify(event: AddProductEvent) {
        this.observers.forEach(observer => observer.update(event))
    }
}