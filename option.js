import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Option extends Component {
  render() {
    const {backgroundColor, txt, display} = this.props
    return (
      <View style={[styles.option, {backgroundColor}]}>
        <Text style={styles.optionTexts}>{txt}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  option: {
    height: 50,
    width: 300,
    marginTop: 20,
    borderRadius: 20,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
    color: 'white',
  },
});
