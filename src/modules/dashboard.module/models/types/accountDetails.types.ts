import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Screens } from '../../../../common/navigation/models/navigation.enums.ts';
import { TRootStackParamList } from '../../../../common/navigation/models/navigation.types.ts';

export type DetailsScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  Screens.AccountDetails
>;
