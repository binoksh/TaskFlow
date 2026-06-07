import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';

export default function WelcomeScreen({ navigation }) {
  return (
    <ScreenWrapper variant="form">
      <View style={styles.container}>
        <View style={styles.hero}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkbox-outline" size={36} color="#fff" />
          </View>
          <Text style={styles.logo}>TaskFlow</Text>
          <Text style={styles.tagline}>Suas tarefas, organizadas</Text>
          <Text style={styles.description}>
            Gerencie atividades da faculdade, trabalho e vida pessoal em um só app.
          </Text>
        </View>

        <View style={styles.actions}>
          <CustomButton title="Entrar na minha conta" onPress={() => navigation.navigate('Login')} />
          <CustomButton
            title="Criar nova conta"
            onPress={() => navigation.navigate('Cadastro')}
            style={styles.secondaryButton}
            textStyle={styles.secondaryText}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
