import React from 'react';
import { View, ScrollView } from 'react-native';
import { useCompactLayout } from '../../utils/layout';
import styles from './styles';

export default function ScreenWrapper({ children, scroll = false, variant = 'page' }) {
  const { isWeb, formWidth, pageWidth } = useCompactLayout();
  const maxWidth = variant === 'form' ? formWidth : pageWidth;

  const content = (
    <View style={[styles.inner, isWeb && maxWidth ? { maxWidth, width: '100%' } : null]}>
      {children}
    </View>
  );

  if (scroll) {
    return (
      <ScrollView
        contentContainerStyle={[styles.scroll, isWeb && styles.webScroll]}
        keyboardShouldPersistTaps="handled"
      >
        {content}
      </ScrollView>
    );
  }

  return <View style={[styles.container, isWeb && styles.webContainer]}>{content}</View>;
}
