/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PreFooter } from '../../components/PreFooter';
import { Resume } from '../../components/Resume';

export const ResumePage: React.FC = () => {
  return (
    <>
      <Header hideMenu />
      <Resume />
      <PreFooter />
      <Footer />
    </>
  );
};

export default ResumePage;
