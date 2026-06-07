import React, { useState, useCallback, useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import { getTarefas } from '../../services/api';
import { COLORS } from '../../assets/colors';
import { UserContext } from '../../context/UserContext';
import { getErrorMessage } from '../../utils/errorHandler';
import { useCompactLayout } from '../../utils/layout';

export default function DashboardScreen() {
  const { user } = useContext(UserContext);
  const { isWide } = useCompactLayout();
  const [stats, setStats] = useState({ total: 0, pendentes: 0, concluidas: 0 });
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setErro(null);
    try {
      const tarefas = await getTarefas();
      const lista = Array.isArray(tarefas) ? tarefas : [];
      setStats({
        total: lista.length,
        pendentes: lista.filter((t) => t.status === 'Pendente').length,
        concluidas: lista.filter((t) => t.status === 'Concluído').length,
      });
    } catch (err) {
      setErro(getErrorMessage(err, 'Não foi possível carregar as estatísticas.'));
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(useCallback(() => { fetchStats(); }, [fetchStats]));

  return (
    <ScreenWrapper>
      <Header
        title="Dashboard"
        subtitle={user ? `Olá, ${user.nome}` : 'Visão geral das tarefas'}
      />

      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} style={styles.loader} />
      ) : erro ? (
        <Text style={styles.erro}>{erro}</Text>
      ) : (
        <View style={[styles.cards, isWide && styles.cardsRow]}>
          <View style={[styles.card, styles.cardTotal]}>
            <Text style={styles.cardValue}>{stats.total}</Text>
            <Text style={styles.cardLabel}>Total</Text>
          </View>
          <View style={[styles.card, styles.cardPending]}>
            <Text style={styles.cardValue}>{stats.pendentes}</Text>
            <Text style={styles.cardLabel}>Pendentes</Text>
          </View>
          <View style={[styles.card, styles.cardDone]}>
            <Text style={styles.cardValue}>{stats.concluidas}</Text>
            <Text style={styles.cardLabel}>Concluídas</Text>
          </View>
        </View>
      )}
    </ScreenWrapper>
  );
}
