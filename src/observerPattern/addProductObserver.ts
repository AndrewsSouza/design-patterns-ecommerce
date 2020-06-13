import { AddProductEvent } from './addProductEvent'

export interface AddProductObserver {
    update(event: AddProductEvent): void;
}