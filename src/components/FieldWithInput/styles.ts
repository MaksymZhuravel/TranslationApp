import {StyleSheet} from 'react-native';
import {ThemeColors} from '~asssets/theme';

const styles = StyleSheet.create({
  field: {
    width: '50%',
    justifyContent: 'center',
    paddingRight: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  inputContent: {paddingLeft: 4, fontSize: 12, paddingRight: 25},
  submitButton: {position: 'absolute', right: '5%', top: '40%'},
  loader: {position: 'absolute', top: '40%', left: '35%'},
  loadingBackground: {backgroundColor: ThemeColors.gray300},
});

export default styles;
