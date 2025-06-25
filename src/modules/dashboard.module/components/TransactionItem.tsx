import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Icon } from '../../../common/components/Icon.tsx';
import { useTheme } from '../../../common/theme';
import { TransactionItemProps } from '../models/types/accountTransactions.types.ts';

export const TransactionItem: React.FC<TransactionItemProps> = ({
  icon,
  title,
  source,
  amount,
  currency,
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.item}>
      <View style={styles.iconWrapper}>
        <Icon name={icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
        <Text style={[styles.source, { color: colors.textSecondary }]}>{source}</Text>
      </View>
      <Text
        style={[
          styles.amount,
          {
            color: amount < 0 ? colors.error : colors.success2,
          },
        ]}>
        {amount > 0 ? '+' : ''}
        {amount.toLocaleString()} {currency}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 10,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  source: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    marginTop: 2,
  },
  amount: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 18,
    fontWeight: '600',
  },
});
