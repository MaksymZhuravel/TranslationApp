import React, {useCallback, useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import useGetLanguages from '~containers/LanguagesTableScreen/useGetLanguages';
import {useGetTranslationsQuery} from '~redux/translate/translate';
import {NewTranslation} from '~components/NewTranslation';
import {TranslationTable} from '~components/TranslationTable';
import styles from '~components/HomeScreenComponent/styles';

const HomeScreenComponent = () => {
  const {languages} = useGetLanguages();
  const {data: translations, refetch} = useGetTranslationsQuery({});
  const [focusedId, setFocusedId] = useState<string | null>();
  const [refreshing, setRefreshing] = useState(false);
  const [fromIsOpen, setFromIsOpen] = useState(false);
  const [toIsOpen, setToIsOpen] = useState(false);
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('en');
  const [items, setItems] = useState<{label: string; value: string}[]>([
    {label: '', value: ''},
  ]);

  useEffect(() => {
    setFocusedId(null);
  }, [translations]);

  useEffect(() => {
    const values = languages?.map(language => ({
      label: language.code.toUpperCase(),
      value: language.code,
    }));
    if (values) {
      setItems(values);
    }
  }, [languages]);

  const handleOpenFrom = useCallback(() => {
    setToIsOpen(false);
    setFromIsOpen(prevState => !prevState);
    setFocusedId(null);
  }, []);

  const handleOpenTo = useCallback(() => {
    setFromIsOpen(false);
    setToIsOpen(prevState => !prevState);
    setFocusedId(null);
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  return (
    <ScrollView
      contentContainerStyle={styles.list}
      style={styles.listStyle}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.fromToSection}>
        <View style={styles.wrapper}>
          <Text>From: </Text>
          <DropDownPicker
            open={fromIsOpen}
            value={from}
            listMode={'SCROLLVIEW'}
            containerStyle={styles.dropDownContainer}
            items={items}
            maxHeight={100}
            setOpen={handleOpenFrom}
            setValue={setFrom}
            setItems={setItems}
          />
        </View>

        <View style={styles.wrapper}>
          <Text>To: </Text>
          <DropDownPicker
            open={toIsOpen}
            value={to}
            items={items}
            containerStyle={styles.dropDownContainer}
            setOpen={handleOpenTo}
            listMode={'SCROLLVIEW'}
            setValue={setTo}
            setItems={setItems}
            placeholder={'Select language'}
          />
        </View>
      </View>
      <TranslationTable
        focusedId={focusedId}
        translations={translations}
        from={from}
        to={to}
        refetch={refetch}
        setFocusedId={setFocusedId}
      />

      <NewTranslation refresh={refetch} />
    </ScrollView>
  );
};

export default HomeScreenComponent;
