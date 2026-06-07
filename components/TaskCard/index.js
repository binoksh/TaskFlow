import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { COLORS } from '../../assets/colors';

export default function TaskCard({ task }) {
  const isConcluida = task.status === 'Concluído';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.titulo}</Text>
      {task.descricao ? (
        <Text style={styles.descricao} numberOfLines={2}>
          {task.descricao}
        </Text>
      ) : null}
      <View style={styles.footer}>
        <Text style={styles.categoria}>{task.categoria}</Text>
        <View
          style={[
            styles.badge,
            { backgroundColor: isConcluida ? COLORS.success : COLORS.secondary },
          ]}
        >
          <Text style={styles.badgeText}>{task.status}</Text>
        </View>
      </View>
    </View>
  );
}
