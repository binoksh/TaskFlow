import React from 'react';
import { View, ScrollView } from 'react-native';
import { useCompactLayout } from '../../utils/layout';
import styles from './styles';

export default function ScreenWrapper({
  children,
  scroll = false,
  variant = 'page',
  centered = false,
}) {
  const { isWeb, formWidth, pageWidth } = useCompactLayout();
  const maxWidth = variant === 'form' ? formWidth : pageWidth;

  const content = (
    <View
      style={[
        centered ? styles.innerCentered : styles.inner,
        isWeb && maxWidth ? { maxWidth, width: '100%' } : null,
      ]}
    >
      {children}
    </View>
  );

  if (scroll) {
    return (
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          isWeb && styles.webScroll,
          centered && styles.centeredScroll,
        ]}
        keyboardShouldPersistTaps="handled"
      >
        {content}
      </ScrollView>
    );
  }

  return <View style={[styles.container, isWeb && styles.webContainer]}>{content}</View>;
}
