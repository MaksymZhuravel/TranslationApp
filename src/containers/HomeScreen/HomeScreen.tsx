import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff', borderBottomWidth: 1},
  text: {margin: 6},
  row: {borderBottomWidth: 1},
});

export default HomeScreen;
