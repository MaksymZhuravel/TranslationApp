import React, {useCallback, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {ThemeColors} from '~asssets/theme';
import {Text, View} from 'react-native';
import styles from '~components/NewTranslation/styles';
import {usePostTranslationMutation} from '~redux/translate/translate';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

interface INewTranslationProps {
  refresh: () => void;
}

const NewTranslation: React.FC<INewTranslationProps> = ({refresh}) => {
  const [postTranslation] = usePostTranslationMutation();
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const handlePressSave = useCallback(async () => {
    setLoader(true);
    if (!/^[A-Za-z.,/?\s]+[\d]*$/.test(text)) {
      setError(true);
    } else if (text.length > 0) {
      await postTranslation({
        code: 'en',
        text,
        key: uuidv4(),
      });
      await refresh();
    }
    setText('');
    setLoader(false);
  }, [postTranslation, refresh, text]);

  const handleOnChangeText = useCallback((inputString: string) => {
    setError(false);
    setText(inputString);
  }, []);

  return (
    <View style={styles.container}>
      <Text>New translation</Text>
      <TextInput
        label={
          error
            ? 'Only Latin letters, numbers and symbols'
            : 'Enter new translation phrase in English first'
        }
        mode="outlined"
        outlineColor={ThemeColors.black}
        error={error}
        onChangeText={handleOnChangeText}
        activeOutlineColor={ThemeColors.primaryBright}
        style={styles.textInput}
        placeholder={'e.g. Hello World!'}
        multiline
      />
      <Button
        mode="elevated"
        style={styles.button}
        onPress={handlePressSave}
        loading={loader}
        textColor={ThemeColors.primaryBright}>
        Create translation
      </Button>
    </View>
  );
};

export default NewTranslation;
