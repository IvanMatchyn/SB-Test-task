import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import { AccountDetailScreen } from '../../modules/dashboard.module/screens/accountDetailsScreen';
import { AccountListScreen } from '../../modules/dashboard.module/screens/accountListScreen';

import { Screens } from './models/navigation.enums.ts';
import { TRootStackParamList } from './models/navigation.types.ts';

const RootStack = createNativeStackNavigator<TRootStackParamList>();

export const AppNavigatorContainer = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" barStyle="default" translucent />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Screens.AccountList}>
        <RootStack.Screen
          name={Screens.AccountList}
          component={AccountListScreen}
        />
        <RootStack.Screen
          name={Screens.AccountDetails}
          component={AccountDetailScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
