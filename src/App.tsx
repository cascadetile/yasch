import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main';
import { ResumePage } from './pages/ResumePage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
