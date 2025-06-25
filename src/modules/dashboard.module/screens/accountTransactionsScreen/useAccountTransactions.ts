import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { Transaction } from '../../../../common/models/types/mockData.types.ts';
import { useAppDispatch, useAppSelector } from '../../../../common/store/hooks';
import { dateFormatter } from '../../../../common/utils/date.ts';
import { getAccountTransactions } from '../../services/thunks/getAccountTransactions.ts';
import { selectAccountTransactions } from '../../store/dashboard.selectors/accountTransactions.selectors.ts';

export const useAccountTransactions = (accountId: string) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const dispatch = useAppDispatch();
  const transactionsData = useAppSelector(selectAccountTransactions);

  const navigateBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const groupedTxns = transactionsData.reduce(
    (acc, txn) => {
      const dateKey = dateFormatter(txn.date);
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(txn);
      return acc;
    },
    {} as Record<string, Transaction[]>,
  );

  useEffect(() => {
    dispatch(getAccountTransactions(accountId));
  }, []);

  return {
    transactionsData,
    navigateBack,
    groupedTxns,
  };
};
