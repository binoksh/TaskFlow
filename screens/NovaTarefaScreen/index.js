import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import { postTarefa } from '../../services/api';
import { CATEGORIAS, STATUS_TAREFA } from '../../utils/constants';
import { validateTarefa, getErrorMessage } from '../../utils/validations';

export default function NovaTarefaScreen() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);
  const [status, setStatus] = useState(STATUS_TAREFA[0]);
  const [loading, setLoading] = useState(false);

  const handleSalvar = async () => {
    const erro = validateTarefa({ titulo, descricao });
    if (erro) {
      Alert.alert('Campos obrigatórios', erro);
      return;
    }

    setLoading(true);
    try {
      await postTarefa({
        titulo: titulo.trim(),
        descricao: descricao.trim(),
        categoria,
        status,
      });
      Alert.alert('Sucesso', 'Tarefa criada!');
      setTitulo('');
      setDescricao('');
      setCategoria(CATEGORIAS[0]);
      setStatus(STATUS_TAREFA[0]);
    } catch (err) {
      Alert.alert('Erro', getErrorMessage(err, 'Não foi possível salvar a tarefa.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper scroll>
      <Header title="Nova Tarefa" subtitle="Adicione uma atividade" />
      <View style={styles.form}>
        <InputField label="Título" required value={titulo} onChangeText={setTitulo} placeholder="Título da tarefa" />
        <InputField label="Descrição" required value={descricao} onChangeText={setDescricao} placeholder="Descrição" multiline />
        <Text style={styles.label}>Categoria</Text>
        <View style={styles.pickerWrapper}>
          <Picker selectedValue={categoria} onValueChange={setCategoria}>
            {CATEGORIAS.map((cat) => (
              <Picker.Item key={cat} label={cat} value={cat} />
            ))}
          </Picker>
        </View>
        <Text style={styles.label}>Status</Text>
        <View style={styles.pickerWrapper}>
          <Picker selectedValue={status} onValueChange={setStatus}>
            {STATUS_TAREFA.map((st) => (
              <Picker.Item key={st} label={st} value={st} />
            ))}
          </Picker>
        </View>
        <CustomButton title={loading ? 'Salvando...' : 'Salvar'} onPress={handleSalvar} disabled={loading} />
      </View>
    </ScreenWrapper>
  );
}
