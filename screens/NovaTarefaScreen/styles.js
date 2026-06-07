import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  form: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  label: {
    color: COLORS.text,
    marginBottom: 4,
    fontWeight: '600',
    fontSize: 14,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    marginBottom: 12,
    overflow: 'hidden',
  },
});
