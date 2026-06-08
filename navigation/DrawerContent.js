import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { UserContext } from '../context/UserContext';
import { COLORS } from '../assets/colors';

export default function DrawerContent(props) {
  const { user, logout } = useContext(UserContext);

  return (
    <View style={styles.wrapper}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scroll}
        style={styles.scrollView}
      >
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>TaskFlow</Text>
          <Text style={styles.subtitle} numberOfLines={1}>Gerenciador de Tarefas</Text>
          {user ? (
            <View style={styles.userBox}>
              <Text style={styles.user} numberOfLines={1}>Olá, {user.nome}</Text>
              <Text style={styles.curso} numberOfLines={1}>{user.curso}</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.menu}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={logout} activeOpacity={0.8}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flex: 1,
  },
  scroll: {
    paddingBottom: 8,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.primary,
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 11,
    color: COLORS.white,
    opacity: 0.85,
    marginTop: 2,
  },
  userBox: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.25)',
  },
  user: {
    fontSize: 13,
    color: COLORS.white,
    fontWeight: '600',
  },
  curso: {
    fontSize: 11,
    color: COLORS.white,
    opacity: 0.8,
    marginTop: 2,
  },
  menu: {
    paddingTop: 4,
  },
  logoutButton: {
    marginHorizontal: 12,
    marginBottom: 14,
    marginTop: 6,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.error,
    alignItems: 'center',
  },
  logoutText: {
    color: COLORS.error,
    fontWeight: '600',
    fontSize: 13,
  },
});
