import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { TimeAndLinks } from './components/TimeAndLinks';
import { HorizontalTextSlider } from './components/HorizontalTextSlider';
import { StoryOnMe } from './components/StoryOnMe';
import { RecentWorks } from './components/RecentWorks';
import { PreFooter } from './components/PreFooter';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <TimeAndLinks />
      <HorizontalTextSlider />
      <StoryOnMe />
      <RecentWorks />
      <PreFooter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
