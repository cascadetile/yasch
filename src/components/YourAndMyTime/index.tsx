import React from 'react';
import './style.css';
import { Time } from '../Time';

export const YourAndMyTime: React.FC = () => {
  return (
    <div className="your-and-my-time">
      <Time isKiev={false} text="your time"></Time>
      <Time isKiev={true} text="my time"></Time>
    </div>
  );
};
