import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseToast, BaseToastProps, ErrorToast, ToastConfig } from 'react-native-toast-message';

import { Icon } from '../components/Icon.tsx';
import { IconsCatalog } from '../models/enums/icons.enums.ts';
import { useTheme } from '../theme';

export const useToastConfig = () => {
  const styles = useStyles();
  const config: ToastConfig = {
    success: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        style={styles.toastContainer}
        renderLeadingIcon={() => {
          return (
            <View style={styles.toastIconContainer}>
              <Icon name={IconsCatalog.ToastWarningRound} />
            </View>
          );
        }}
        text1Style={styles.text1Style}
        text1NumberOfLines={3}
        text2Style={styles.text2Style}
        text2NumberOfLines={3}
      />
    ),
    error: (props: BaseToastProps) => (
      <ErrorToast
        {...props}
        style={styles.toastContainer}
        renderLeadingIcon={() => {
          return (
            <View style={styles.toastIconContainer}>
              <Icon name={IconsCatalog.ToastWarningRound} />
            </View>
          );
        }}
        text1Style={styles.text1Style}
        text1NumberOfLines={3}
        text2Style={styles.text2Style}
        text2NumberOfLines={3}
      />
    ),
  };

  return { config };
};

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    toastContainer: {
      minHeight: 80,
      width: '90%',
      // borderLeftColor: borderColors.border_disabled,
      borderLeftWidth: 1,
      borderWidth: 1,
      borderRadius: 12,
      // borderColor: borderColors.border_disabled,
      // backgroundColor: backgroundColors.bg_on_dark,
    },
    toastIconContainer: {
      marginLeft: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text1Style: {
      fontFamily: 'Roboto-Bold',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 25,
    },
    text2Style: {
      fontFamily: 'Quicksand-Regular',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '600',
      color: colors.textPrimary,
    },
  });
};
