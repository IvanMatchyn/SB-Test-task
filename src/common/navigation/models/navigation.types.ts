import { Screens } from './navigation.enums';

export type TRootStackParamList = {
  [Screens.AccountList]: undefined;
  [Screens.ChatBot]: undefined;
  [Screens.PinCode]: undefined;
  [Screens.AccountTransactions]: {
    accountId: string;
  };
};
