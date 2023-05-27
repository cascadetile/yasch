/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

interface IProps {
  title?: string
  jobRole?: string
  time?: string
  text: string
  children?: React.ReactNode
}

export const ResumeGroupItem: React.FC<IProps> = ({
  title, jobRole, time, text, children,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`resume-group-item resume-group-item--${theme}`}>
      {
        (title || children || jobRole || time)
        && (
          <div className="resume-group-item__header">
            <div className="resume-group-item__title-and-subtitle">
              {
                title
                && (
                  <div className={`resume-group-item__title resume-group-item__title--${theme}`}>{title}</div>
                )
              }
              {
                children
                && (
                  <div className={`resume-group-item__subtitle resume-group-item__subtitle--${theme}`}>{children}</div>
                )
              }
            </div>
            <div className="resume-group-item__role-and-time">
              {
                jobRole
                && (
                  <div className={`resume-group-item__role resume-group-item__role--${theme}`}>{jobRole}</div>
                )
              }
              {
                time
                && (
                  <div className={`resume-group-item__time resume-group-item__time--${theme}`}>{time}</div>
                )
              }
            </div>
          </div>
        )
      }
      <div className="resume-group-item__text">
        {text}
      </div>
    </div>
  );
};

export default ResumeGroupItem;
