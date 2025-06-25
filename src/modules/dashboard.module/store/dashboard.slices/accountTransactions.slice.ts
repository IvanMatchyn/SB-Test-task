import { createSlice } from '@reduxjs/toolkit';

import { AccountTransactionsStoreState } from '../../models/interfaces/accountTransactionsStore.interfaces.ts';
import { getAccountTransactions } from '../../services/thunks/getAccountTransactions.ts';

const initialAccountListState: AccountTransactionsStoreState = {
  data: [],
};

export const AccountTransactionsSlice = createSlice({
  name: 'accountTransactions',
  initialState: initialAccountListState,
  reducers: {
    clear: () => {
      return {
        ...initialAccountListState,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAccountTransactions.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getAccountTransactions.pending, state => {
        state.data = [];
      })
      .addCase(getAccountTransactions.rejected, state => {
        state.data = [];
      });
  },
});

export const AccountTransactionsActions = AccountTransactionsSlice.actions;
export const AccountTransactionsReducers = AccountTransactionsSlice.reducer;
