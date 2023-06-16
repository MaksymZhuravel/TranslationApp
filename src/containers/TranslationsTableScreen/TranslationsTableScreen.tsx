import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeColors} from '~asssets/theme';
import useGetLanguages from '~containers/TranslationsTableScreen/useGetLanguages';

const TranslationsTableScreen = () => {
  const {languages} = useGetLanguages();

  console.log(JSON.stringify(languages));

  return (
    <View>
      <Text style={{color: ThemeColors.black}}>
        {String(languages)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff', borderBottomWidth: 1},
  text: {margin: 6},
  row: {borderBottomWidth: 1},
  circle: {
    height: 15,
    width: 15,
    backgroundColor: ThemeColors.green,
  },
});

export default TranslationsTableScreen;
