/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

interface Props {
  isKiev: boolean,
  text: string
}

export const Time: React.FC<Props> = ({ isKiev, text }) => {
  const [time, setTime] = useState('12:00 AM');
  const { theme } = useContext(ThemeContext);

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
        <div className={`time__value time__value--${theme}`}>{time}</div>
        <div className="time__text">{text}</div>
      </div>
    </div>
  );
};

export default Time;
