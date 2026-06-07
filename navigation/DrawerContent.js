import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { UserContext } from '../context/UserContext';
import { COLORS } from '../assets/colors';

export default function DrawerContent(props) {
  const { user, logout } = useContext(UserContext);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scroll}>
      <View style={styles.header}>
        <Text style={styles.title}>TaskFlow</Text>
        <Text style={styles.subtitle}>Gerenciador de Tarefas</Text>
        {user ? (
          <>
            <Text style={styles.user}>Olá, {user.nome}</Text>
            <Text style={styles.curso}>{user.curso}</Text>
          </>
        ) : null}
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    padding: 20,
    backgroundColor: COLORS.primary,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.white,
    opacity: 0.85,
    marginTop: 4,
  },
  user: {
    fontSize: 14,
    color: COLORS.white,
    marginTop: 12,
    fontWeight: '600',
  },
  curso: {
    fontSize: 12,
    color: COLORS.white,
    opacity: 0.85,
    marginTop: 4,
  },
  logoutButton: {
    margin: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.error,
    alignItems: 'center',
  },
  logoutText: {
    color: COLORS.error,
    fontWeight: '700',
  },
});
