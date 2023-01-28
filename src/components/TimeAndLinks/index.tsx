/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';
import { YourAndMyTime } from '../YourAndMyTime';
import { SocialLink } from '../SocialLink';

export const TimeAndLinks: React.FC = () => {
  return (
    <div className="time-and-links">
      <YourAndMyTime />
      <div className="time-and-links__links">
        <SocialLink link="https://linkedin.com/yaschenko" text="LinkedIn" />
        <SocialLink link="https://dribbble.com/yaschenko" text="Dribbble" />
        <SocialLink link="https://behance.com/yaschenko" text="Behance" />
        <SocialLink link="https://instagram.com/yaschenko" text="Instagram" />
      </div>
    </div>
  );
};

export default TimeAndLinks;
