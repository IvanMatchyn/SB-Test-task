import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Account } from '../../../../common/models/types/mockData.types';
import { useTheme } from '../../../../common/theme';
import { CARD_WIDTH } from '../../constants';

import { useAccountListScreen } from './useAccountListScreen';

export const AccountListScreen = () => {
  const { navigateToDetails, keyExtractor, navigateToChatBot, showMessage, accountList } =
    useAccountListScreen();
  const { colors } = useTheme();

  const styles = useStyles();

  const renderListItem: ListRenderItem<Account> = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={navigateToDetails(item)} activeOpacity={0.8}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardNumber}>** {item.number.slice(-4)}</Text>
      <Text style={styles.cardBalance}>${item.balance.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[colors.surface, colors.backgroundPrimary]}
      style={styles.gradientContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.screenTitle}>All Accounts</Text>
          {!accountList.length && <ActivityIndicator size={'large'} />}
          <FlatList
            data={accountList}
            keyExtractor={keyExtractor}
            renderItem={renderListItem}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.contentContainer}
          />
          <TouchableOpacity onPress={navigateToChatBot} style={styles.button}>
            <Text style={styles.buttonText}>Chat Bot</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showMessage} style={styles.button}>
            <Text style={styles.buttonText}>Open New Card</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    gradientContainer: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      padding: 20,
    },
    screenTitle: {
      fontSize: 22,
      fontWeight: '600',
      color: colors.textSecondary,
      marginBottom: 20,
      fontFamily: 'Quicksand-Regular',
    },
    contentContainer: {
      paddingBottom: 20,
    },
    row: {
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    card: {
      width: CARD_WIDTH,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      padding: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 4 },
      elevation: 5,
    },
    cardTitle: {
      fontSize: 16,
      color: colors.textPrimary,
      marginBottom: 8,
      fontFamily: 'Roboto-Bold',
    },
    cardNumber: {
      color: colors.textPrimary,
      fontSize: 14,
      marginBottom: 8,
    },
    cardBalance: {
      fontSize: 18,
      color: '#fff',
      fontWeight: '700',
    },
    button: {
      backgroundColor: colors.button.background,
      borderRadius: 30,
      paddingVertical: 12,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: colors.button.text,
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Quicksand-Regular',
    },
  });
};
