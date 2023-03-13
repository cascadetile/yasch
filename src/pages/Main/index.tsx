/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { AboutMe } from '../../components/AboutMe';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HorizontalTextSlider } from '../../components/HorizontalTextSlider';
import { PreFooter } from '../../components/PreFooter';
import { RecentWorks } from '../../components/RecentWorks';
import { StoryOnMe } from '../../components/StoryOnMe';
import { TimeAndLinks } from '../../components/TimeAndLinks';

export const Main: React.FC = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <TimeAndLinks />
      <HorizontalTextSlider />
      <StoryOnMe />
      <RecentWorks />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Main;
