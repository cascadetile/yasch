/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Footer } from '../../components/Footer';
import { ResumeHeader } from '../../components/ResumeHeader';
import { PreFooter } from '../../components/PreFooter';
import { Resume } from '../../components/Resume';

export const ResumePage: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <Resume />
      <PreFooter />
      <Footer />
    </>
  );
};

export default ResumePage;
