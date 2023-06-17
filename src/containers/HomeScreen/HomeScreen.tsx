import React from 'react';
import {View} from 'react-native';
import {styles} from '~containers/HomeScreen/styles';
import {HomeScreenComponent} from '~components/HomeScreenComponent';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <HomeScreenComponent />
    </View>
  );
};

export default HomeScreen;
