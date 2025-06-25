import { createAsyncThunk } from '@reduxjs/toolkit';

import { mockTransactions } from '../../../../common/constants/mockData.ts';
import { Transaction } from '../../../../common/models/types/mockData.types.ts';

export const getAccountTransactions = createAsyncThunk(
  'dashboard/accountDetails',
  async (id: string): Promise<Transaction[]> => {
    try {
      return await new Promise<Transaction[]>(resolve => {
        const currentAccoutDetails = mockTransactions[id];
        setTimeout(() => {
          resolve(currentAccoutDetails || []);
        }, 2000);
      });
    } catch (err) {
      throw new Error('Error');
    }
  },
);
