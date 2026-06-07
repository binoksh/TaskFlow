import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  loader: {
    marginTop: 32,
  },
  erro: {
    color: COLORS.error,
    textAlign: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
    fontSize: 14,
  },
  cards: {
    paddingHorizontal: 16,
    gap: 10,
  },
  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    flex: 1,
    minWidth: 140,
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 10,
    borderLeftWidth: 4,
    marginBottom: 10,
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
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.primary,
  },
  cardLabel: {
    fontSize: 13,
    color: COLORS.text,
    marginTop: 2,
    opacity: 0.75,
  },
});
