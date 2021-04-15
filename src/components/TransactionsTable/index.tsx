import { useTransactions } from "../../hooks/useTransactions";
import { Transaction } from "../Transaction";

import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <Transaction 
                                key={String(transaction.id)}
                                transaction={transaction}
                            />
                        );
                    })} 

                    {/* 
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="transaction-entrada">R$12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>
                    
                    <NewTransaction />
                    <tr>
                        <td>Hamburger</td>
                        <td className="transaction-saida">- R$59,00</td>
                        <td>Alimentação</td>
                        <td>10/01/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="transaction-saida">- R$1.200,00</td>
                        <td>Casa</td>
                        <td>27/03/2021</td>
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className="transaction-entrada">R$5.400,00</td>
                        <td>Venda</td>
                        <td>15/03/2021</td>
                    </tr>
                    */}
                </tbody>
            </table>
        </Container>
    );
}