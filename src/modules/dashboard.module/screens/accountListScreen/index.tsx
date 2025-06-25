import React from 'react';
import {
  Button,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { mockAccounts } from '../../../../common/constants/mockData.ts';
import { Account } from '../../../../common/models/types/mockData.types.ts';

import { useAccountListScreen } from './useAccountListScreen.ts';

export const AccountListScreen = () => {
  const { navigateToDetails, keyExtractor, navigateToChatBot } =
    useAccountListScreen();

  const renderListItem: ListRenderItem<Account> = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.accountItem}
        onPress={navigateToDetails(item)}>
        <Text style={styles.accountName}>{item.name}</Text>
        <Text style={styles.accountNumber}>{item.number}</Text>
        <Text style={styles.balance}>${item.balance.toFixed(2)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Accounts</Text>
        <FlatList
          data={mockAccounts}
          keyExtractor={keyExtractor}
          renderItem={renderListItem}
        />
        <Button title={'To Chat bot'} onPress={navigateToChatBot} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    fontFamily: 'Quicksand-Regular',
  },
  accountItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  accountName: {
    fontSize: 18,
    marginBottom: 4,
    fontFamily: 'Roboto-SemiBold',
  },
  accountNumber: {
    color: '#555',
    marginBottom: 2,
  },
  balance: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
});
