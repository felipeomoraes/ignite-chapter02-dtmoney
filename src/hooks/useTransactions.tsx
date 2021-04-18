import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface TransactionProps {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

/* interface TransactionInput {
    title: string;
    amount: number;
    type: string;
    category: string;
} */

/* type TransactionInput = Pick<TransactionProps, 'title' | 'amount' | 'type' | 'category'>; */

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

type TransactionRemove = Pick<TransactionProps, 'id'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: TransactionProps[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    removeTransaction: (transaction: TransactionRemove) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
        {} as TransactionsContextData
    );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });
        const { transaction } = response.data;
        console.log(response.data);

        setTransactions([
            ...transactions,
            transaction
        ]);
    }

    async function removeTransaction(transactionRemove: TransactionRemove) {
        const response = await api.post('/transactions/remove', {
            ...transactionRemove
        });

        const { id } = response.data;

        setTransactions(transactions.filter(element => element.id !== id));
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction, removeTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);
    return context;
}