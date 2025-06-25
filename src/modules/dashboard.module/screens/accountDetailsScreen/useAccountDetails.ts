import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import { Account } from '../../../../common/models/types/mockData.types.ts';

export const useAccountDetails = (accountData: Account) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const navigateBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return {
    navigateBack,
  };
};
