import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 15,
  },
});
