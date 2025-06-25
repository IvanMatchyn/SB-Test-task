import { combineReducers } from '@reduxjs/toolkit';

import {
  AccountListReducers,
  AccountListSlice,
} from '../../modules/dashboard.module/store/dashboard.slices/accountList.slice.ts';
import {
  AccountTransactionsReducers,
  AccountTransactionsSlice,
} from '../../modules/dashboard.module/store/dashboard.slices/accountTransactions.slice.ts';

export const rootReducer = combineReducers({
  [AccountListSlice.name]: AccountListReducers,
  [AccountTransactionsSlice.name]: AccountTransactionsReducers,
});
