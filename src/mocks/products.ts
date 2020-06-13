import { Product } from '../models/product'

let idGenerator = 0

export const productsList = [
    new Product(idGenerator++, 'Arroz', 5.50),
    new Product(idGenerator++, 'Coca-Cola 3l', 8 ),
    new Product(idGenerator++, 'Sorvete Flocos', 21),
    new Product(idGenerator++, 'Suco de Laranja', 6),
    new Product(idGenerator++, 'Óleo de Soja', 4),
    new Product(idGenerator++, 'Leite Condensado', 4),
    new Product(idGenerator++, 'Barra de Chocolate', 5),
]