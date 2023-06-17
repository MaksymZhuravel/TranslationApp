import React, {useCallback, useState} from 'react';
import {DataTable} from 'react-native-paper';
import {FieldWithInput} from '~components/FieldWithInput';
import {Translation, Translations} from '~types/api/translateApi.types';
import {
  usePathTranslationMutation,
  usePostTranslationMutation,
} from '~redux/translate/translate';
import styles from '~components/TranslationTable/styles';
import 'react-native-get-random-values';
import {Text} from 'react-native';

interface ITranslationTableProps {
  focusedId?: string | null;
  setFocusedId: (value?: string | null) => void;
  to: string;
  from: string;
  translations?: Translations[];
  refetch: () => void;
}

const TranslationTable: React.FC<ITranslationTableProps> = ({
  focusedId,
  setFocusedId,
  to,
  from,
  translations,
  refetch,
}) => {
  const [updateTranslation] = usePathTranslationMutation();
  const [postTranslation, result] = usePostTranslationMutation();
  const [text, setText] = React.useState('');
  const [loader, setLoader] = useState(false);

  const handleOnPressCell = useCallback(
    (id?: string) => {
      setFocusedId(id);
      setText('');
    },
    [setFocusedId],
  );

  const onSubmit = useCallback(
    async (
      textString: string,
      translationKey: string,
      translationId?: string,
      wordFrom?: Translation,
    ) => {
      if (!textString.length) {
        setFocusedId(null);
        return;
      }
      setLoader(true);
      if (translationId) {
        await updateTranslation({
          translationId,
          text: textString,
        });
      } else {
        await postTranslation({
          key: translationKey,
          text: textString,
          code: wordFrom ? to : from,
        });

        console.log(
          result,
          {
            key: translationKey,
            text: textString,
            code: wordFrom ? to : from,
          },
          'CODE',
          translationKey,
        );
      }
      setText('');
      await refetch();
      setLoader(false);
      setFocusedId(null);
    },
    [
      from,
      postTranslation,
      refetch,
      result,
      setFocusedId,
      to,
      updateTranslation,
    ],
  );

  return (
    <DataTable style={styles.table}>
      <DataTable.Header>
        <DataTable.Title textStyle={styles.headerText}>
          {from.toUpperCase()}
        </DataTable.Title>
        <DataTable.Title textStyle={styles.headerText}>
          {to.toUpperCase()}
        </DataTable.Title>
      </DataTable.Header>
      {translations?.length === 0 ? (
        <Text style={styles.noDataText}>No data</Text>
      ) : null}
      {translations?.map((translation, index) => {
        const wordFrom = translation.translations.find(
          item => item.language.code === from,
        );

        const wordTo = translation.translations.find(
          item => item.language.code === to,
        );

        return (
          <DataTable.Row key={translation.id}>
            <FieldWithInput
              onPress={() => handleOnPressCell(wordFrom?.id || `from-${index}`)}
              focusedId={focusedId}
              onSubmit={() =>
                onSubmit(text, translation.key, wordFrom?.id, wordFrom)
              }
              isLoading={loader}
              id={`from-${index}`}
              text={text}
              word={wordFrom}
              setText={setText}
            />
            <FieldWithInput
              onPress={() => setFocusedId(wordTo?.id || `to-${index}`)}
              focusedId={focusedId}
              onSubmit={() =>
                onSubmit(text, translation.key, wordTo?.id, wordFrom)
              }
              isLoading={loader}
              id={`to-${index}`}
              text={text}
              word={wordTo}
              setText={setText}
            />
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
};

export default TranslationTable;
