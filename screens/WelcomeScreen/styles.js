import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'web' ? 32 : 48,
    minHeight: Platform.OS === 'web' ? 480 : undefined,
  },
  hero: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: COLORS.text,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 21,
    maxWidth: 320,
  },
  actions: {
    gap: 10,
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    marginTop: 0,
  },
  secondaryText: {
    color: COLORS.primary,
  },
});
