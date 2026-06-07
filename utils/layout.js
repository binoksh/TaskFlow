import { Platform, useWindowDimensions } from 'react-native';

export function useCompactLayout() {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isWide = width >= 768;

  return {
    isWeb,
    isWide,
    formWidth: isWeb ? Math.min(400, width - 48) : undefined,
    pageWidth: isWeb ? Math.min(720, width - 48) : undefined,
    contentPadding: isWeb ? 20 : 16,
  };
}
