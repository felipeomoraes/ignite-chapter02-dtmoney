import React from 'react';
import ReactDOM from 'react-dom';
// import { createServer, Model } from 'miragejs';
import { App } from './App';
import { CreateServer } from './services/createServer';

CreateServer();

/* 
createServer({
  models: {
    transaction: Model, // Nome da tabela dp banco de dados do MirageJS
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
         {
          id: 1,
          title: 'Desenvolvimento de site',
          type: 'deposit',
          category: 'Venda',
          amount: 12000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Hamburger',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 59,
          createdAt: new Date('2021-02-14 1:00:00')
        } 
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data)
    })
  }
})
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);