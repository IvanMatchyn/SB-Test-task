// AccountDetailScreen.tsx
import React, { FC } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Icon } from '../../../../common/components/Icon';
import { IconsCatalog } from '../../../../common/models/enums/icons.enums';
import { useTheme } from '../../../../common/theme';
import { TransactionItem } from '../../components/TransactionItem.tsx';
import { TransactionsScreenProps } from '../../models/types/accountTransactions.types.ts';

import { useAccountTransactions } from './useAccountTransactions.ts';

export const AccountTransactionsScreen: FC<TransactionsScreenProps> = ({ route }) => {
  const { accountId } = route.params;
  const { navigateBack, groupedTxns, transactionsData } = useAccountTransactions(accountId);

  const { colors } = useTheme();
  const colorScheme = useColorScheme();

  const styles = useStyles();

  return (
    <LinearGradient colors={[colors.surface, colors.backgroundPrimary]} style={styles.fill}>
      <SafeAreaView style={styles.fill}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
              <Icon
                name={
                  colorScheme === 'dark' ? IconsCatalog.BackButtonWhite : IconsCatalog.BackButton
                }
              />
            </TouchableOpacity>
            <Text style={styles.title}>Savings Details</Text>
          </View>
          {!transactionsData.length && <ActivityIndicator style={styles.loader} size={'large'} />}
          <ScrollView showsVerticalScrollIndicator={false}>
            {Object?.entries?.(groupedTxns).map(([date, items]) => (
              <View key={date} style={styles.section}>
                <Text style={styles.transactionDate}>{date}</Text>
                {items.map(txn => (
                  <TransactionItem
                    key={txn.id}
                    icon={txn.icon}
                    title={txn.description}
                    source={txn.source}
                    amount={txn.amount}
                    currency="$"
                  />
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    fill: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    backButton: {
      position: 'absolute',
      left: 0,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Roboto-Bold',
      color: colors.textSecondary,
    },
    transactionDate: {
      fontSize: 18,
      color: colors.textSecondary,
      fontFamily: 'Roboto-SemiBold',
      marginTop: 24,
      marginBottom: 8,
    },
    section: {
      marginBottom: 12,
    },
    loader: {
      marginTop: 50,
    },
  });
};
