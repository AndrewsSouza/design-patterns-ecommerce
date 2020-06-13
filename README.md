# Design-patterns-ecommerce

Este repositório é designado para um trabalho da cadeira Projeto e Arquitetura de Software.

Objetivo do trabalho:
Utilizar os design patterns:
- Singleton
- Observer
- Strategy
- Factory
- Facade
  
Para implementar um solução para o fluxo de adição de um produto a um carrinho de compras e o fluxo de pagamento.

## Projeto

Para rodar o projeto, vá na pasta raíz e rode o comando "npm run dev". 
Na sequência, utilize uma ferramenta como Postman ou Insominia para testar as rotas:

- Listar os produtos:

  Método HTTP: **GET**
  
  url: http://localhost:3333/products
  
- Adicionar um produto ao carrinho:

  Método HTTP: **POST**
  
  url: http://localhost:3333/basket/:productId
  
  exemplo: http://localhost:3333/basket/0
  
- Buscar método de pagamento:

  Método HTTP: **GET**
  
  url: http://localhost:3333/payment/methods
  
- Realizar pagamento:

  Método HTTP: **POST**
  
  url: http://localhost:3333/payment
  
  exemplo de corpo json que **deve** ser enviado junto:
    {
        "paymentMethod": "invoice"
    }
   
