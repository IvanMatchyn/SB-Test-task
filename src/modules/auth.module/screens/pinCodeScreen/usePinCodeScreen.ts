import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Vibration } from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

import { Screens } from '../../../../common/navigation/models/navigation.enums.ts';
import { MMKVStorage } from '../../../../common/storage/storage.ts';
import { PIN_KEY, PIN_LENGTH } from '../../constants';

const rnBiometrics = new ReactNativeBiometrics();

export const usePinCodeScreen = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [biometricTried, setBiometricTried] = useState(false);

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const correctPin = MMKVStorage.getStorageStringData(PIN_KEY, true); // fallback default

  const handlePress = (value: string) => {
    if (pin.length < PIN_LENGTH) {
      const newPin = pin + value;
      setPin(newPin);

      if (newPin.length === PIN_LENGTH) {
        setTimeout(() => validatePin(newPin), 100);
      }
    }
  };

  const validatePin = (enteredPin: string) => {
    if (enteredPin === correctPin) {
      navigation.navigate(Screens.AccountList); // your home screen name
    } else {
      Vibration.vibrate(200);
      setError(true);
      setTimeout(() => {
        setError(false);
        setPin('');
      }, 1000);
    }
  };

  const handleBackspace = () => {
    if (pin.length > 0) {
      setPin(prev => prev.slice(0, -1));
    }
  };

  const tryBiometricAuth = async () => {
    setBiometricTried(true);

    const { available, biometryType } = await rnBiometrics.isSensorAvailable();
    if (!available) return;

    if (biometryType === BiometryTypes.Biometrics || biometryType === BiometryTypes.FaceID) {
      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: 'Authenticate with biometrics',
      });

      if (success && correctPin) {
        setPin(correctPin);
        validatePin(correctPin);
      }
    }
  };

  useEffect(() => {
    if (!biometricTried) {
      tryBiometricAuth();
    }
  }, []);

  return {
    pin,
    tryBiometricAuth,
    handleBackspace,
    handlePress,
    error,
  };
};
