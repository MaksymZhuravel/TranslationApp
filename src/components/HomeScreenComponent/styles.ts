import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  list: {
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  listStyle: {height: '100%'},
  fromToSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blockPicker: {
    flexDirection: 'row',
  },
  wrapper: {
    width: '40%',
    gap: 8,
  },
  dropDownContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default styles;
