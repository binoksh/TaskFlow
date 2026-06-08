import React from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import NovaTarefaScreen from '../screens/NovaTarefaScreen';
import ListaTarefasScreen from '../screens/ListaTarefasScreen';
import DrawerContent from './DrawerContent';
import { COLORS } from '../assets/colors';

const Drawer = createDrawerNavigator();

function getDrawerWidth(screenWidth, isWeb) {
  if (isWeb) {
    if (screenWidth >= 1200) return 240;
    if (screenWidth >= 900) return 220;
    return Math.min(screenWidth * 0.72, 280);
  }
  return Math.min(screenWidth * 0.78, 280);
}

export default function DrawerRoutes() {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const drawerWidth = getDrawerWidth(width, isWeb);
  const usePermanentDrawer = isWeb && width >= 900;

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: '700', fontSize: 17 },
        drawerActiveTintColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.text,
        drawerActiveBackgroundColor: '#EFF6FF',
        drawerType: usePermanentDrawer ? 'permanent' : 'front',
        drawerStyle: {
          width: drawerWidth,
          borderRightWidth: isWeb ? 1 : 0,
          borderRightColor: COLORS.lightGray,
        },
        drawerItemStyle: {
          marginHorizontal: 10,
          marginVertical: 2,
          borderRadius: 8,
        },
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
          marginLeft: -6,
        },
        swipeEnabled: !isWeb,
        sceneContainerStyle: { backgroundColor: COLORS.background },
      }}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Drawer.Screen
        name="Nova Tarefa"
        component={NovaTarefaScreen}
        options={{ title: 'Nova Tarefa' }}
      />
      <Drawer.Screen
        name="Lista de Tarefas"
        component={ListaTarefasScreen}
        options={{ title: 'Lista de Tarefas' }}
      />
    </Drawer.Navigator>
  );
}
