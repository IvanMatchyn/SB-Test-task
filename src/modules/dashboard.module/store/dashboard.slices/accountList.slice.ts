import { createSlice } from '@reduxjs/toolkit';

import { AccountListStoreState } from '../../models/interfaces/accountListStore.interfaces.ts';
import { getAccountList } from '../../services/thunks/getAccountList.ts';

const initialAccountListState: AccountListStoreState = {
  data: [],
  loading: false,
};

export const AccountListSlice = createSlice({
  name: 'accountList',
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
      .addCase(getAccountList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAccountList.pending, state => {
        state.data = [];
        state.loading = true;
      })
      .addCase(getAccountList.rejected, state => {
        state.data = [];
        state.loading = false;
      });
  },
});

export const AccountListReducers = AccountListSlice.reducer;
