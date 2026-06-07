import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 4,
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '600',
  },
  required: {
    color: COLORS.error,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    fontSize: 15,
    color: COLORS.text,
  },
  inputError: {
    borderColor: COLORS.error,
    borderWidth: 1.5,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4,
  },
  multiline: {
    minHeight: 72,
    textAlignVertical: 'top',
  },
});
