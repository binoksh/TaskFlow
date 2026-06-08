import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  loader: {
    marginTop: 24,
  },
  erro: {
    color: COLORS.error,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
    fontSize: 13,
  },
  cards: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 10,
    borderLeftWidth: 4,
    marginBottom: 8,
    alignSelf: 'stretch',
  },
  cardRow: {
    flex: 1,
    minWidth: 120,
    marginBottom: 0,
  },
  cardTotal: {
    borderLeftColor: COLORS.secondary,
  },
  cardPending: {
    borderLeftColor: '#F59E0B',
  },
  cardDone: {
    borderLeftColor: COLORS.success,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
  },
  cardLabel: {
    fontSize: 12,
    color: COLORS.text,
    marginTop: 2,
    opacity: 0.75,
  },
});
