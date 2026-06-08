import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  form: {
    paddingBottom: 16,
  },
  label: {
    color: COLORS.text,
    marginBottom: 4,
    fontWeight: '600',
    fontSize: 13,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    overflow: 'hidden',
  },
});
