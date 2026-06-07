import React from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import DashboardScreen from '../screens/DashboardScreen';
import NovaTarefaScreen from '../screens/NovaTarefaScreen';
import ListaTarefasScreen from '../screens/ListaTarefasScreen';
import DrawerContent from './DrawerContent';
import { COLORS } from '../assets/colors';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const drawerWidth = width >= 768 ? 280 : 240;

  const screenOptions = {
    headerStyle: { backgroundColor: COLORS.primary },
    headerTintColor: COLORS.white,
    headerTitleStyle: { fontWeight: '700' },
    drawerActiveTintColor: COLORS.primary,
    drawerInactiveTintColor: COLORS.text,
    drawerActiveBackgroundColor: '#EFF6FF',
    drawerType: isWeb ? 'permanent' : 'front',
    drawerStyle: isWeb ? { width: drawerWidth, borderRightWidth: 0 } : { width: 260 },
    swipeEnabled: !isWeb,
    sceneContainerStyle: { backgroundColor: COLORS.background },
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={screenOptions}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Nova Tarefa"
        component={NovaTarefaScreen}
        options={{
          title: 'Nova Tarefa',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lista de Tarefas"
        component={ListaTarefasScreen}
        options={{
          title: 'Lista de Tarefas',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
