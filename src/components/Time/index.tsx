/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import './style.css';

interface Props {
  isKiev: boolean,
  text: string
}

export const Time: React.FC<Props> = ({ isKiev, text }) => {
  const [time, setTime] = useState('12:00 AM');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      if (isKiev) {
        setTime(date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          timeZone: 'Europe/Kiev',
        }));
      } else {
        setTime(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
      }
    }, 1000);
  }, []);

  return (
    <div className="time">
      <div className="time__circle">&nbsp;</div>
      <div className="time__value-text-wrapper">
        <div className="time__value">{time}</div>
        <div className="time__text">{text}</div>
      </div>
    </div>
  );
};

export default Time;
