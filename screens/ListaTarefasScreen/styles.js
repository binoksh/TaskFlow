import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  filterContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  filterLabel: {
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
    overflow: 'hidden',
  },
  listContainer: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  loader: {
    marginTop: 32,
  },
  erro: {
    color: COLORS.error,
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.text,
    opacity: 0.6,
    marginTop: 24,
    fontSize: 14,
  },
});
