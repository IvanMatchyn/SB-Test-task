export type Account = {
  id: string;
  name: string;
  number: string;
  balance: number;
};

export type Transaction = {
  id: string;
  description: string;
  date: string;
  amount: number;
};

export type TransactionMap = {
  [accountId: string]: Transaction[];
};
