//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import {getFormattedDate} from '../../util/date';
import {useNavigation} from '@react-navigation/native';

// create a component
const ExpenseItem = ({id, description, amount, date}) => {
  const navigation = useNavigation();
  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', {
      expensesId: id,
    });
  };
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.expenseItem} key={id}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 6,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
  },
});

//make this component available to the app
export default ExpenseItem;