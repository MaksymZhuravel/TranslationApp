import {StyleSheet} from 'react-native';
import {ThemeColors} from '~asssets/theme';

const styles = StyleSheet.create({
  main: {paddingTop: 20},
  headerText: {fontWeight: '600', color: ThemeColors.black},
  counterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  list: {height: '100%'},
  icon: {
    width: 20,
    height: 15,
  },
  circle: {
    height: 15,
    width: 15,
    backgroundColor: ThemeColors.gray300,
    borderRadius: 50,
  },
  green: {
    backgroundColor: ThemeColors.green,
  },
});

export default styles;
