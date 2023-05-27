/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

interface IProps {
  title: string
  time: string
  text: string
}

export const ResumeEducation: React.FC<IProps> = ({
  title, time, text,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`resume-education resume-education--${theme}`}>
      <div className="resume-education__header">
        <div className="resume-education__title-and-time">
          <div className={`resume-education__title resume-education__title--${theme}`}>{title}</div>
          <div className={`resume-education__time resume-education__time--${theme}`}>{time}</div>
        </div>
      </div>
      <div className="resume-education__text">
        {text}
      </div>
    </div>
  );
};

export default ResumeEducation;
