import React, { createContext } from 'react';

interface IThemeContext {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<IThemeContext>({ theme: 'light', setTheme: () => {} });

export default ThemeContext;
