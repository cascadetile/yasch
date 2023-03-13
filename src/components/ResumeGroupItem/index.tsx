/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
import React from 'react';
import './style.css';

interface IProps {
  title?: string
  subtitle?: string
  jobRole?: string
  time?: string
  text: string
}

export const ResumeGroupItem: React.FC<IProps> = ({
  title, subtitle, jobRole, time, text,
}) => {
  return (
    <div className="resume-group-item">
      {
        (title || subtitle || jobRole || time)
        && (
          <div className="resume-group-item__header">
            <div className="resume-group-item__title-and-subtitle">
              {
                title
                && (
                  <div className="resume-group-item__title">{title}</div>
                )
              }
              {
                subtitle
                && (
                  <div className="resume-group-item__subtitle">{subtitle}</div>
                )
              }
            </div>
            <div className="resume-group-item__role-and-time">
              {
                jobRole
                && (
                  <div className="resume-group-item__role">{jobRole}</div>
                )
              }
              {
                time
                && (
                  <div className="resume-group-item__time">{time}</div>
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
