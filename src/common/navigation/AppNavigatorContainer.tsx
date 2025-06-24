import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IRootStackParamList } from './models/navigation.types.ts';
import React from 'react';
import { View , Text } from 'react-native';

const RootStack = createNativeStackNavigator<IRootStackParamList>();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export const AppNavigatorContainer = () => {
  return (
      <RootStack.Navigator>

      </RootStack.Navigator>
  )
}
