import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { IconsCatalog } from '../../../../common/models/enums/icons.enums.ts';
import { Screens } from '../../../../common/navigation/models/navigation.enums.ts';
import { TRootStackParamList } from '../../../../common/navigation/models/navigation.types.ts';

export type TransactionsScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  Screens.AccountTransactions
>;

export type TransactionItemProps = {
  icon: IconsCatalog;
  title: string;
  source: string;
  amount: number;
  currency: string;
};
