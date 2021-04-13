
interface TransactionProps {
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function Transaction(transaction: TransactionProps) {
    return (
        <tr>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(transaction.amount)} {/* Funciona de forma semelhante ao .toLocaleString() */}
            </td>
            <td>{transaction.category}</td>
            <td>
                {new Intl.DateTimeFormat('pt-BR',).format(
                    new Date(transaction.createdAt)
                )}
            </td>
        </tr>
    );
}