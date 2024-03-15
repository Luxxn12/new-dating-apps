import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {padding: 20, minHeight: 150},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#a21caf',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#a21caf',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#7e22ce',
    borderBottomWidth: 2,
  },
});
