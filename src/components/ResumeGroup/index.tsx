/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';

interface IProps {
  title: string
  marginTop: number
}

export const ResumeGroup: React.FC<IProps> = ({ title, marginTop }) => {
  return (
    <div className="resume-group" style={{ marginTop: `${marginTop}px` }}>
      <div className="resume-group__title">{title}</div>
    </div>
  );
};

export default ResumeGroup;
