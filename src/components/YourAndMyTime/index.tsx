/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';
import { Time } from '../Time';

export const YourAndMyTime: React.FC = () => {
  return (
    <div className="your-and-my-time">
      <Time isKiev={false} text="your time" />
      <Time isKiev text="my time" />
    </div>
  );
};

export default YourAndMyTime;
