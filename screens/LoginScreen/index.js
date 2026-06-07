import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import { loginUsuario } from '../../services/api';
import { UserContext } from '../../context/UserContext';
import { validateLoginFields } from '../../utils/validations';

export default function LoginScreen({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const limparErro = (campo) => {
    setApiError('');
    if (errors[campo]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[campo];
        return next;
      });
    }
  };

  const handleLogin = async () => {
    const resultado = validateLoginFields({ email, senha });
    if (!resultado.isValid) {
      setErrors(resultado.errors);
      return;
    }

    setLoading(true);
    setErrors({});
    setApiError('');
    try {
      const usuario = await loginUsuario(email.trim(), senha);
      setUser(usuario);
    } catch (err) {
      setApiError('E-mail ou senha incorretos. Verifique e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper scroll variant="form">
      <View style={styles.card}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Acesse sua conta no TaskFlow</Text>

        {apiError ? <Text style={styles.apiError}>{apiError}</Text> : null}

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
          placeholder="Digite sua senha"
          secureTextEntry
          error={errors.senha}
        />

        <CustomButton
          title={loading ? 'Entrando...' : 'Entrar na conta'}
          onPress={handleLogin}
          disabled={loading}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.link}>
          <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
