import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import { useToastConfig } from './src/common/hooks/useToastConfig.tsx';
import { AppNavigatorContainer } from './src/common/navigation/AppNavigatorContainer.tsx';
import { store } from './src/common/store';
import { ThemeProvider } from './src/common/theme';

export const App = () => {
  const { config } = useToastConfig();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <AppNavigatorContainer />
          <Toast config={config} />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};
