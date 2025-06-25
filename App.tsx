import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigatorContainer } from './src/common/navigation/AppNavigatorContainer.tsx';

export const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigatorContainer />
    </SafeAreaProvider>
  );
};
