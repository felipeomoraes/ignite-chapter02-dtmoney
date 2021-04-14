import { useContext } from 'react';
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);
    
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.entradas += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.saidas += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        entradas: 0,
        saidas:0,
        total:0
    })
    

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.entradas)}
                </strong>
                {/* <strong>R$1.000,00</strong> */}
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saídas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(-summary.saidas)}
                </strong>
                {/* <strong>- R$500,00</strong> */}
            </div>
            <div className="total-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
                {/* <strong>R$500,00</strong> */}
            </div>
        </Container>
    );
}