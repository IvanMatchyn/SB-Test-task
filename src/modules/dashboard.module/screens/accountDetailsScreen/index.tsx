import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Icon } from '../../../../common/components/Icon.tsx';
import { mockTransactions } from '../../../../common/constants/mockData.ts';
import { IconsCatalog } from '../../../../common/models/enums/icons.enums.ts';
import { dateFormatter } from '../../../../common/utils/date.ts';
import { DetailsScreenProps } from '../../models/types/accountDetails.types.ts';

import { useAccountDetails } from './useAccountDetails.ts';

export const AccountDetailScreen: FC<DetailsScreenProps> = ({ route }) => {
  const { account } = route.params;

  const { navigateBack } = useAccountDetails(account);

  const txns = mockTransactions[account.id] || [];

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={navigateBack}>
            <Icon name={IconsCatalog.BackButton} />
          </TouchableOpacity>
          <Text style={styles.title}>{account.name} Details</Text>
        </View>

        <Text style={styles.info}>Account Number: {account.number}</Text>
        <Text style={styles.info}>Balance: ${account.balance.toFixed(2)}</Text>
        <Text style={styles.subtitle}>Recent Transactions:</Text>
        {txns.map(txn => (
          <View style={styles.transactionItem} key={txn.id}>
            <Text style={styles.transactionDate}>
              {dateFormatter(txn.date)}
            </Text>
            <View style={styles.transactionRow}>
              <Text style={styles.transactionText}>{txn.description}</Text>
              <Text
                style={[
                  styles.transactionAmount,
                  { color: txn.amount >= 0 ? '#28a745' : '#dc3545' },
                ]}>
                {txn.amount >= 0 ? '+' : ''}${txn.amount.toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    marginBottom: 16,
    color: '#111',
  },
  info: {
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
    marginBottom: 6,
    color: '#333',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Roboto-SemiBold',
    marginVertical: 12,
    color: '#222',
  },
  transactionItem: {
    marginBottom: 16,
  },

  transactionDate: {
    fontSize: 18,
    fontFamily: 'Roboto-SemiBold',
    color: '#666',
    marginBottom: 4,
  },

  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  transactionText: {
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
    color: '#000',
  },

  transactionAmount: {
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
    fontWeight: '500',
  },
  actions: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 14,
    backgroundColor: '#007AFF',
    marginBottom: 12,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Roboto-SemiBold',
  },
});
