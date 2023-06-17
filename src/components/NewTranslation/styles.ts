import {StyleSheet} from 'react-native';
import {ThemeColors} from '~asssets/theme';

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  textInput: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  button: {
    borderRadius: 8,
    width: 200,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
    backgroundColor: ThemeColors.white,
  },
});

export default styles;
