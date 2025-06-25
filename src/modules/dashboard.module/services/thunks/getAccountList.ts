import { createAsyncThunk } from '@reduxjs/toolkit';

import { mockAccounts } from '../../../../common/constants/mockData.ts';
import { Account } from '../../../../common/models/types/mockData.types.ts';

export const getAccountList = createAsyncThunk(
  'dashboard/accountList',
  async (): Promise<Account[]> => {
    try {
      return await new Promise<Account[]>(resolve => {
        setTimeout(() => {
          resolve(mockAccounts || []);
        }, 2000);
      });
    } catch (err) {
      throw new Error('Error');
    }
  },
);
