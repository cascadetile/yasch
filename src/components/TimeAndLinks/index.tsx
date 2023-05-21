/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import './style.css';
import { YourAndMyTime } from '../YourAndMyTime';
import { SocialLink } from '../SocialLink';
import { ThemeContext } from '../../contexts';

export const TimeAndLinks: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div className={`time-and-links__wrapper time-and-links__wrapper--${theme}`}>
        <div className="time-and-links">
          <YourAndMyTime />
          <div className="time-and-links__links">
            <SocialLink link="https://www.linkedin.com/in/pinkaversa" text="LinkedIn" />
            <SocialLink link="https://dribbble.com/PinkAversa" text="Dribbble" />
            <SocialLink link="https://www.behance.net/aversa" text="Behance" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeAndLinks;
