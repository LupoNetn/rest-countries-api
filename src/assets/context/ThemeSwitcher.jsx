import React, { createContext, useState } from 'react';


export const ThemeSwitcher = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeSwitcher.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeSwitcher.Provider>
  );
};

export default ThemeProvider;
