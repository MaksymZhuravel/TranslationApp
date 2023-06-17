import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from '~components/FieldWithInput/styles';
import {Translation} from '~types/api/translateApi.types';
import {ThemeColors} from '~asssets/theme';
import {Tick} from '~asssets/icons';
import 'react-native-get-random-values';

interface IFieldWithInputProps {
  onPress: () => void;
  focusedId?: string | null;
  word?: Translation;
  onSubmit: () => void;
  isLoading: boolean;
  text: string;
  id: string;
  setText: (text: string) => void;
}

const FieldWithInput: React.FC<IFieldWithInputProps> = ({
  onPress,
  focusedId,
  word,
  onSubmit,
  isLoading,
  text,
  setText,
  id,
}) => {
  const {width} = useWindowDimensions();

  return (
    <TouchableOpacity onPress={onPress} style={styles.field}>
      {focusedId === word?.id || focusedId === id ? (
        <View>
          <TextInput
            value={text}
            mode="outlined"
            placeholder={word?.text || ''}
            multiline
            onEndEditing={onSubmit}
            contentStyle={styles.inputContent}
            style={[
              {width: width / 2 - 50},
              styles.inputContainer,
              isLoading && styles.loadingBackground,
            ]}
            onChangeText={setText}
            outlineColor={ThemeColors.black}
            activeOutlineColor={ThemeColors.primaryBright}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => onSubmit()}
            disabled={isLoading}>
            <Tick />
          </TouchableOpacity>
          {isLoading ? <ActivityIndicator style={styles.loader} /> : null}
        </View>
      ) : (
        <Text>{word?.text || '---'}</Text>
      )}
    </TouchableOpacity>
  );
};

export default FieldWithInput;
