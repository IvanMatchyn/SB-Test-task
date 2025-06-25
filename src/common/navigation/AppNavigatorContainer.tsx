import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import { PinCodeScreen } from '../../modules/auth.module/screens/pinCodeScreen';
import { ChatBotScreen } from '../../modules/chatbot.module/screens/chatBotScreen';
import { AccountListScreen } from '../../modules/dashboard.module/screens/accountListScreen';
import { AccountTransactionsScreen } from '../../modules/dashboard.module/screens/accountTransactionsScreen';

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
        initialRouteName={Screens.PinCode}>
        <RootStack.Screen name={Screens.AccountList} component={AccountListScreen} />
        <RootStack.Screen
          name={Screens.AccountTransactions}
          component={AccountTransactionsScreen}
        />
        <RootStack.Screen name={Screens.PinCode} component={PinCodeScreen} />
        <RootStack.Screen name={Screens.ChatBot} component={ChatBotScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
