import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setUserName('Aluno');
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setUserName('Aluno');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
