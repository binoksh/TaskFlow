import React, { useState } from 'react';
import { UserContext } from './UserContext';

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}
