import { IconsCatalog } from '../enums/icons.enums.ts';

export type Account = {
  id: string;
  name: string;
  number: string;
  balance: number;
};

export type Transaction = {
  id: string;
  description: string;
  source: string;
  date: string;
  amount: number;
  icon: IconsCatalog;
};

export type TransactionMap = {
  [accountId: string]: Transaction[];
};
