/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

interface IProps {
  title: string
  marginTop: number
}

export const ResumeGroup: React.FC<IProps> = ({ title, marginTop }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="resume-group" style={{ marginTop: `${marginTop}px` }}>
      <div className={`resume-group__title resume-group__title--${theme}`}>{title}</div>
    </div>
  );
};

export default ResumeGroup;
