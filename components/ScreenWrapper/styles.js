import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  webContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  webScroll: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  inner: {
    width: '100%',
    flex: 1,
  },
});
