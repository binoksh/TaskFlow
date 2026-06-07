import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import AuthRoutes from './AuthRoutes';
import DrawerRoutes from './DrawerRoutes';

export default function AppNavigator() {
  const { user } = useContext(UserContext);

  return user ? <DrawerRoutes /> : <AuthRoutes />;
}
