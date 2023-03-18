import React, { createContext, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main';
import { ResumePage } from './pages/ResumePage';

interface IThemeContext {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext<IThemeContext>({ theme: 'light', setTheme: () => {} });

function App() {
  const [theme, setTheme] = useState('light');
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <div className="app">
      <ThemeContext.Provider value={themeMemo}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
