import React, { useState, useContext } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import { postUsuario, emailJaCadastrado } from '../../services/api';
import { UserContext } from '../../context/UserContext';
import { validateCadastroFields } from '../../utils/validations';
import { getErrorMessage } from '../../utils/errorHandler';

export default function CadastroScreen({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const limparErro = (campo) => {
    if (errors[campo]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[campo];
        return next;
      });
    }
  };

  const handleCadastrar = async () => {
    const resultado = validateCadastroFields({ nome, email, curso, senha, confirmSenha });
    if (!resultado.isValid) {
      setErrors(resultado.errors);
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      if (await emailJaCadastrado(email)) {
        setErrors({ email: 'Este e-mail já está cadastrado' });
        return;
      }

      const payload = { nome: nome.trim(), email: email.trim(), curso: curso.trim(), senha };
      const usuario = await postUsuario(payload);
      setUser(usuario);
    } catch (err) {
      Alert.alert('Erro', getErrorMessage(err, 'Não foi possível cadastrar o usuário.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper scroll variant="form">
      <View style={styles.card}>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.subtitle}>Preencha todos os campos obrigatórios (*)</Text>

        <InputField
          label="Nome"
          required
          value={nome}
          onChangeText={(v) => { setNome(v); limparErro('nome'); }}
          placeholder="Seu nome completo"
          autoCapitalize="words"
          error={errors.nome}
        />
        <InputField
          label="E-mail"
          required
          value={email}
          onChangeText={(v) => { setEmail(v); limparErro('email'); }}
          placeholder="seu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
        />
        <InputField
          label="Curso"
          required
          value={curso}
          onChangeText={(v) => { setCurso(v); limparErro('curso'); }}
          placeholder="Ex: Análise e Desenvolvimento de Sistemas"
          autoCapitalize="words"
          error={errors.curso}
        />
        <InputField
          label="Senha"
          required
          value={senha}
          onChangeText={(v) => { setSenha(v); limparErro('senha'); }}
          placeholder="Mínimo 6 caracteres"
          secureTextEntry
          error={errors.senha}
        />
        <InputField
          label="Confirmar senha"
          required
          value={confirmSenha}
          onChangeText={(v) => { setConfirmSenha(v); limparErro('confirmSenha'); }}
          placeholder="Repita a senha"
          secureTextEntry
          error={errors.confirmSenha}
        />

        <CustomButton
          title={loading ? 'Cadastrando...' : 'Cadastrar'}
          onPress={handleCadastrar}
          disabled={loading}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.link}>
          <Text style={styles.linkText}>Já tem conta? Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
