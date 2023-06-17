import React, {useMemo, useState} from 'react';
import useGetLanguages from '~containers/LanguagesTableScreen/useGetLanguages';
import {Image, RefreshControl, ScrollView, Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {useGetTranslationsQuery} from '~redux/translate/translate';
import styles from '~components/LanguagesTable/styles';

const LanguagesTable = () => {
  const {languages, refetch} = useGetLanguages();
  const {data: translations} = useGetTranslationsQuery({});
  const [refreshing, setRefreshing] = useState(false);

  const totalCountOfTranslations = useMemo(
    () => translations?.length,
    [translations],
  );

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  return (
    <View style={styles.main}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title textStyle={styles.headerText}>
            Country
          </DataTable.Title>
          <DataTable.Title textStyle={styles.headerText}>
            Description
          </DataTable.Title>
          <DataTable.Title textStyle={styles.headerText}>
            Translations filled
          </DataTable.Title>
        </DataTable.Header>
        <ScrollView
          style={styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {languages?.map(language => (
            <DataTable.Row key={language.id}>
              <DataTable.Cell>
                <Image
                  source={{
                    uri: `https://translation-api-d85cd220a123.herokuapp.com/languages/icon/${language.iconId}`,
                  }}
                  style={styles.icon}
                />
              </DataTable.Cell>
              <DataTable.Cell>{language.code}</DataTable.Cell>
              <DataTable.Cell>
                <View style={styles.counterView}>
                  <Text>
                    {language.translatedCount} / {totalCountOfTranslations}
                  </Text>
                  <View
                    style={[
                      styles.circle,
                      language.translatedCount === totalCountOfTranslations &&
                        styles.green,
                    ]}
                  />
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </ScrollView>
      </DataTable>
    </View>
  );
};

export default LanguagesTable;
