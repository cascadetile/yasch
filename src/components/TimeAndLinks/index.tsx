import React, { useState } from 'react';
import './style.css';
import { YourAndMyTime } from '../YourAndMyTime';
import { SocialLink } from '../SocialLink';

export const TimeAndLinks: React.FC = () => {
  return (
    <div className="time-and-links">
      <YourAndMyTime />
      <div className="time-and-links__links">
        <SocialLink link="https://linkedin.com/yaschenko" text="LinkedIn"></SocialLink>
        <SocialLink link="https://dribbble.com/yaschenko" text="Dribbble"></SocialLink>
        <SocialLink link="https://behance.com/yaschenko" text="Behance"></SocialLink>
        <SocialLink link="https://instagram.com/yaschenko" text="Instagram"></SocialLink>
      </div>
    </div>
  );
};
