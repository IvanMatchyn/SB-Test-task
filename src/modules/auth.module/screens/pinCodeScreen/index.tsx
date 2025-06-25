import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../common/components/Icon.tsx';
import { IconsCatalog } from '../../../../common/models/enums/icons.enums.ts';
import { MMKVStorage } from '../../../../common/storage/storage.ts';
import { PIN_CODE_ARRAY_MASK, PIN_KEY, PIN_LENGTH } from '../../constants';

import { usePinCodeScreen } from './usePinCodeScreen.ts';

/* Mock implementation*/
MMKVStorage.storeDataStorage(PIN_KEY, '12345', true);

export const PinCodeScreen = () => {
  const { handlePress, handleBackspace, error, tryBiometricAuth, pin } = usePinCodeScreen();

  const renderDot = (index: number) => {
    const isFilled = index < pin.length;
    return (
      <View
        key={index}
        style={[styles.dot, isFilled && styles.dotFilled, error && styles.dotError]}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter PIN Code</Text>
      <View style={styles.dotsContainer}>
        {[...Array(PIN_LENGTH)].map((_, index) => renderDot(index))}
      </View>
      {error && <Text style={styles.errorText}>Incorrect PIN. Try again.</Text>}
      <View style={styles.pad}>
        {PIN_CODE_ARRAY_MASK.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item, idx) => {
              if (item === 'face') {
                return (
                  <TouchableOpacity key={idx} style={styles.key} onPress={tryBiometricAuth}>
                    <Icon name={IconsCatalog.FaceId} />
                  </TouchableOpacity>
                );
              }
              if (item === 'back') {
                return (
                  <TouchableOpacity key={idx} style={styles.key} onPress={handleBackspace}>
                    <Icon name={IconsCatalog.BackButton} />
                  </TouchableOpacity>
                );
              }
              return (
                <TouchableOpacity key={idx} style={styles.key} onPress={() => handlePress(item)}>
                  <Text style={styles.keyText}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 32,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center',
    marginTop: 24,
    fontWeight: '500',
    color: '#333',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
    gap: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dotFilled: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  pad: {
    marginBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  dotError: {
    borderColor: 'red',
    backgroundColor: 'red',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 24,
  },
  key: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginBottom: 24,
  },
  link: {
    color: '#000',
    fontSize: 14,
  },
});
