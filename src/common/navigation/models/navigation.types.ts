import { Account } from '../../models/types/mockData.types.ts';

import { Screens } from './navigation.enums';

export type TRootStackParamList = {
  [Screens.AccountList]: undefined;
  [Screens.AccountDetails]: {
    account: Account;
  };
};
