import { createServer, Model } from "miragejs";

export function CreateServer() {
    return createServer({
        models: {
            transaction: Model, // Nome da tabela dp banco de dados do MirageJS
        },
        seeds(server) {
            server.db.loadData({
                transactions: [
                /* {
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
                } */
                ]
            })
        },
        routes() {
            this.namespace = 'api';
        
            // Rota de carregamento dos dados no banco de dados.
            this.get('/transactions', () => {
                return this.schema.all('transaction')
            })
        
            // Rota de criação de um novo registro no banco de dados.
            this.post('/transactions', (schema, request) =>{
                const data = JSON.parse(request.requestBody);
                return schema.create('transaction', data)
            })

            // Rota de exclusão de um registro no banco de dados.
            this.post('/transactions/remove', (schema, request) =>{
                const data = JSON.parse(request.requestBody);
                schema.find('transaction', data.id)?.destroy();
                return data
            })
        }
    })
}