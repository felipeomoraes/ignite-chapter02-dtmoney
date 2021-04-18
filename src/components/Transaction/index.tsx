import excluirImg from '../../assets/excluir.svg'
import { useTransactions } from '../../hooks/useTransactions';

interface TransactionProps {
    transaction: {
        id: number;
        title: string;
        amount: number;
        type: string;
        category: string;
        createdAt: string;
    }
}

export function Transaction({transaction}: TransactionProps) {
    const { removeTransaction } = useTransactions();

    async function handleRemoveTransaction(id: number) {   
        await removeTransaction({id});
    }

    return (
        <tr>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(transaction.type === 'deposit' ? transaction.amount : -transaction.amount)} {/* Funciona de forma semelhante ao .toLocaleString() */}
            </td>
            <td>{transaction.category}</td>
            <td>
                {new Intl.DateTimeFormat('pt-BR',).format(
                    new Date(transaction.createdAt)
                )}
            </td>
            <td>
                <button onClick={() => handleRemoveTransaction(transaction.id)}>
                    <img src={excluirImg} alt="Excluir"/>
                </button>
            </td>
        </tr>
    );
}