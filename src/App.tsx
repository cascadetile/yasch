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
import { Footer } from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
