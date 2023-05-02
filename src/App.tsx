import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeContext } from './contexts';
import { Main } from './pages/Main';
import { ResumePage } from './pages/ResumePage';

function App() {
  const [theme, setTheme] = useState('light');
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <div className={`app app--${theme}`}>
      <ThemeContext.Provider value={themeMemo}>
        <BrowserRouter>
          <ScrollToTop />
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
