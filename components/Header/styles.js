import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'web' ? 12 : 16,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    marginBottom: Platform.OS === 'web' ? 12 : 16,
  },
  title: {
    fontSize: Platform.OS === 'web' ? 18 : 22,
    fontWeight: '700',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.text,
    opacity: 0.7,
    marginTop: 2,
  },
});
