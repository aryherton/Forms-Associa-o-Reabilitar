// contexts/PasswordContext.js
import { createContext, useState } from 'react';

const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [valuePassword, setValuePassword] = useState('maio2024');

  return (
    <PasswordContext.Provider value={{ valuePassword, setValuePassword }}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
