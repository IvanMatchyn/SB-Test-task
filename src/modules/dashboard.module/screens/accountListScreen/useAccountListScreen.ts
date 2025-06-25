import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useCallback } from 'react';

import { Account } from '../../../../common/models/types/mockData.types.ts';
import { Screens } from '../../../../common/navigation/models/navigation.enums.ts';

export const useAccountListScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const navigateToDetails = useCallback(
    (item: Account) => () => {
      navigation.navigate(Screens.AccountDetails, { account: item });
    },
    [navigation],
  );

  const navigateToChatBot = useCallback(() => {
    navigation.navigate(Screens.ChatBot);
  }, [navigation]);

  const keyExtractor = (item: Account) => item.id;

  return {
    navigateToDetails,
    navigateToChatBot,
    keyExtractor,
  };
};
