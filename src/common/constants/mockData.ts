import { Account, TransactionMap } from '../models/types/mockData.types.ts';

export const mockAccounts: Account[] = [
  {
    id: 'acc001',
    name: 'Savings',
    number: '**** 1234',
    balance: 5025.5,
  },
  {
    id: 'acc002',
    name: 'Checking',
    number: '**** 5978',
    balance: 1842.75,
  },
  {
    id: 'acc003',
    name: 'Investment',
    number: '**** 8890',
    balance: 10987.3,
  },
  {
    id: 'acc004',
    name: 'Travel Fund',
    number: '**** 4321',
    balance: 800.0,
  },
];

export const mockTransactions: TransactionMap = {
  acc001: [
    {
      id: 'txn1',
      date: '2025-06-20',
      description: 'ATM Withdrawal',
      amount: -100.0,
    },
    { id: 'txn2', date: '2025-06-18', description: 'Deposit', amount: 500.0 },
    {
      id: 'txn3',
      date: '2025-06-16',
      description: 'Electric Bill',
      amount: -120.0,
    },
    {
      id: 'txn4',
      date: '2025-06-15',
      description: 'Grocery Store',
      amount: -65.2,
    },
    {
      id: 'txn5',
      date: '2025-06-14',
      description: 'Transfer from Checking',
      amount: 250.0,
    },
  ],
  acc002: [
    {
      id: 'txn6',
      date: '2025-06-19',
      description: 'Restaurant',
      amount: -75.5,
    },
    { id: 'txn7', date: '2025-06-17', description: 'Salary', amount: 2000.0 },
    {
      id: 'txn8',
      date: '2025-06-13',
      description: 'Online Shopping',
      amount: -120.45,
    },
    {
      id: 'txn9',
      date: '2025-06-12',
      description: 'Water Bill',
      amount: -40.0,
    },
    {
      id: 'txn10',
      date: '2025-06-10',
      description: 'Transfer to Savings',
      amount: -250.0,
    },
  ],
  acc003: [
    {
      id: 'txn11',
      date: '2025-06-20',
      description: 'Stock Dividend',
      amount: 320.0,
    },
    {
      id: 'txn12',
      date: '2025-06-15',
      description: 'Investment Deposit',
      amount: 5000.0,
    },
    {
      id: 'txn13',
      date: '2025-06-10',
      description: 'ETF Purchase',
      amount: -2500.0,
    },
    {
      id: 'txn14',
      date: '2025-06-08',
      description: 'Bond Interest',
      amount: 80.0,
    },
    {
      id: 'txn15',
      date: '2025-06-06',
      description: 'Crypto Trade',
      amount: -100.0,
    },
  ],
  acc004: [
    {
      id: 'txn16',
      date: '2025-06-18',
      description: 'Airbnb Reservation',
      amount: -300.0,
    },
    {
      id: 'txn17',
      date: '2025-06-17',
      description: 'Flight Booking',
      amount: -200.0,
    },
    {
      id: 'txn18',
      date: '2025-06-14',
      description: 'Travel Deposit',
      amount: 800.0,
    },
    {
      id: 'txn19',
      date: '2025-06-10',
      description: 'Travel Insurance',
      amount: -50.0,
    },
    {
      id: 'txn20',
      date: '2025-06-08',
      description: 'Currency Exchange',
      amount: -40.0,
    },
  ],
};
