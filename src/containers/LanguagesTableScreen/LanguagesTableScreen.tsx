import React from 'react';
import {LanguagesTable} from '~components/LanguagesTable';
import {View} from 'react-native';
import {styles} from '~containers/LanguagesTableScreen/styles';

const LanguagesTableScreen = () => (
  <View style={styles.screen}>
    <LanguagesTable />
  </View>
);

export default LanguagesTableScreen;
