import React, { useState, useContext } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import { loginUsuario } from '../../services/api';
import { UserContext } from '../../context/UserContext';
import { validateLoginFields, getErrorMessage } from '../../utils/validations';

export default function LoginScreen({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
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

  const handleEntrar = async () => {
    const resultado = validateLoginFields({ email, senha });
    if (!resultado.isValid) {
      setErrors(resultado.errors);
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const usuario = await loginUsuario(email.trim(), senha);
      setUser(usuario);
    } catch (err) {
      const mensagem = err.code === 'AUTH_FAILED'
        ? err.message
        : getErrorMessage(err, 'Não foi possível fazer login.');
      Alert.alert('Erro', mensagem);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper scroll variant="form" centered>
      <View style={styles.header}>
        <Text style={styles.logo}>TaskFlow</Text>
        <Text style={styles.tagline}>Gerenciador de Tarefas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Acesse com seu e-mail e senha</Text>

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
          label="Senha"
          required
          value={senha}
          onChangeText={(v) => { setSenha(v); limparErro('senha'); }}
          placeholder="Sua senha"
          secureTextEntry
          error={errors.senha}
        />

        <CustomButton
          title={loading ? 'Entrando...' : 'Entrar'}
          onPress={handleEntrar}
          disabled={loading}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          style={styles.link}
        >
          <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
