import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../common/store/hooks';

const selectSelf = (state: RootState) => state;
const selectAccountTransactions = createSelector(
  selectSelf,
  state => state.accountTransactions.data,
);

export { selectAccountTransactions };
