import React, { createContext, useContext, useState } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
}
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
