import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../common/store/hooks';

const selectSelf = (state: RootState) => state;
const selectAccountList = createSelector(selectSelf, state => state.accountList.data);

export { selectAccountList };
