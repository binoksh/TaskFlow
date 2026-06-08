import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  filterContainer: {
    paddingBottom: 8,
  },
  filterLabel: {
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
    overflow: 'hidden',
  },
  listContainer: {
    flex: 1,
  },
  list: {
    paddingBottom: 16,
  },
  loader: {
    marginTop: 24,
  },
  erro: {
    color: COLORS.error,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 13,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.text,
    opacity: 0.6,
    marginTop: 20,
    fontSize: 13,
  },
});
