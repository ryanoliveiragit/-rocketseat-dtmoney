import { createContext, ReactNode, useEffect, useState } from "react";
import {api} from '../lib/axios'

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createAt: string;
}

interface TransactionsType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
   const response = await api.get('transactions', {
    params: {
      _sort: 'createdAt',
      _order: 'desc',
      q: query
    }
   })
    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, [transactions]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
