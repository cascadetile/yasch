/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts';
import { Tooltip } from '../Tooltip';
import './style.css';

const email = 'vlad@co.dev';

export const AboutMe: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('Click to copy');
  const [tooltipPos, setTooltipPos] = useState([0, 0]);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setTooltipText('Email Copied');
    setTimeout(() => {
      setTooltipText('Click to copy');
    }, 1500);
  };

  return (
    <div id="aboutme" className={`about-me__wrapper about-me__wrapper--${theme}`}>
      <div className={`about-me about-me--${theme}`}>
        <div className="about-me__left">
          <div className={`about-me__left-title-1 about-me__left-title-1--${theme}`}>
            Welcome here,
            &nbsp;
            <span>I&apos;m Vlad!</span>
          </div>
          <div className={`about-me__left-title-2 about-me__left-title-2--${theme}`}>Creating seamless digital journeys.</div>
        </div>
        <div className="about-me__right">
          <div className="about-me__right-title-1">for collaborations</div>
          <div
            className={`about-me__right-title-2 about-me__right-title-2--${theme}`}
          >
            <span
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseMove={(e) => setTooltipPos([e.pageX + 10, e.pageY + 10])}
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
