import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import TaskCard from '../../components/TaskCard';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import { getTarefas } from '../../services/api';
import { COLORS } from '../../assets/colors';
import { FILTROS_CATEGORIA } from '../../utils/constants';
import { getErrorMessage } from '../../utils/validations';

export default function ListaTarefasScreen() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const fetchTarefas = useCallback(async () => {
    setLoading(true);
    setErro(null);
    try {
      const data = await getTarefas();
      setTarefas(Array.isArray(data) ? data : []);
    } catch (err) {
      setErro(getErrorMessage(err, 'Não foi possível carregar as tarefas.'));
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(useCallback(() => { fetchTarefas(); }, [fetchTarefas]));

  const filtered = filtro === 'Todos' ? tarefas : tarefas.filter((t) => t.categoria === filtro);

  return (
    <ScreenWrapper>
      <Header title="Lista de Tarefas" subtitle={`${filtered.length} tarefa(s) exibida(s)`} />

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Categoria</Text>
        <View style={styles.pickerWrapper}>
          <Picker selectedValue={filtro} onValueChange={setFiltro}>
            {FILTROS_CATEGORIA.map((item) => (
              <Picker.Item key={item} label={item} value={item} />
            ))}
          </Picker>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} style={styles.loader} />
      ) : erro ? (
        <Text style={styles.erro}>{erro}</Text>
      ) : (
        <FlatList
          style={styles.listContainer}
          data={filtered}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <TaskCard task={item} />}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<Text style={styles.empty}>Nenhuma tarefa encontrada.</Text>}
        />
      )}
    </ScreenWrapper>
  );
}
