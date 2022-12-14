//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

// create a component
const Input = ({label, style, textInputConfig}) => {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary700,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    height: 50,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

//make this component available to the app
export default Input;
