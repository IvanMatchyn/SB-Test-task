import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';

import { useToastShow } from '../../../../common/hooks/useToastShow.tsx';
import { Account } from '../../../../common/models/types/mockData.types.ts';
import { Screens } from '../../../../common/navigation/models/navigation.enums.ts';
import { useAppDispatch, useAppSelector } from '../../../../common/store/hooks';
import { getAccountList } from '../../services/thunks/getAccountList.ts';
import { selectAccountList } from '../../store/dashboard.selectors/accountList.selectors.ts';

export const useAccountListScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const { showToast } = useToastShow();
  const dispatch = useAppDispatch();

  const accountList = useAppSelector(selectAccountList);

  const navigateToDetails = useCallback(
    (item: Account) => () => {
      navigation.navigate(Screens.AccountTransactions, { accountId: item.id });
    },
    [navigation],
  );

  const navigateToChatBot = useCallback(() => {
    navigation.navigate(Screens.ChatBot);
  }, [navigation]);

  const keyExtractor = (item: Account) => item.id;

  const showMessage = () => {
    showToast({
      titleText: 'Feature currently unavailable',
    });
  };

  const getAccountListData = () => {
    dispatch(getAccountList());
  };

  useEffect(() => {
    getAccountListData();
  }, []);

  return {
    accountList,
    showMessage,
    navigateToDetails,
    navigateToChatBot,
    keyExtractor,
  };
};
