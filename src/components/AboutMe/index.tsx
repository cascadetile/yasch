/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import { Tooltip } from '../Tooltip';
import './style.css';

const email = 'vlad@co.dev';

export const AboutMe: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('Click to copy');
  const emailRef = useRef<HTMLDivElement>(null);
  const [tooltipPos, setTooltipPos] = useState([0, 0]);

  useEffect(() => {
    if (emailRef.current) {
      const { left, top } = emailRef.current.getBoundingClientRect();
      setTooltipPos([left + 35, top + 40]);
    }
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setTooltipText('Email Copied');
    setTimeout(() => {
      setTooltipText('Click to copy');
    }, 1500);
  };

  return (
    <div className="about-me__wrapper">
      <div className="about-me">
        <div className="about-me__left">
          <div className="about-me__left-title-1">
            Welcome here,
            &nbsp;
            <span>I&apos;m Vlad!</span>
          </div>
          <div className="about-me__left-title-2">Creating seamless digital journeys.</div>
        </div>
        <div className="about-me__right">
          <div className="about-me__right-title-1">for collaborations</div>
          <div
            className="about-me__right-title-2"
          >
            <span
              ref={emailRef}
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
              onClick={() => copyEmail()}
            >
              {email}
            </span>
          </div>
        </div>
      </div>
      {
        isTooltipVisible
        && (
          <Tooltip posX={tooltipPos[1]} posY={tooltipPos[0]} text={tooltipText} />
        )
      }
    </div>
  );
};

export default AboutMe;
