/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts';
import { Tooltip } from '../Tooltip';
import { Check } from '../../assets/Check';
import './style.css';

const email = 'vlad@co.dev';

export const AboutMe: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('Click to copy');
  const [tooltipPos, setTooltipPos] = useState([0, 0]);

  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const isMobile = width <= 768;

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setTooltipText('Email Copied');
    setTimeout(() => {
      setTooltipText('Click to copy');
    }, 1500);
  };

  return (
    <div id="aboutme" className={`anchor about-me__wrapper about-me__wrapper--${theme}`}>
      <div className="about-me">
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
              onClick={() => {
                if (isMobile) {
                  setIsTooltipVisible(true);
                  setTimeout(() => {
                    setIsTooltipVisible(false);
                  }, 1000);
                }
                copyEmail();
              }}
            >
              {email}
            </span>
          </div>
        </div>
      </div>
      {
        isTooltipVisible
        && (
          <Tooltip posX={tooltipPos[1]} posY={tooltipPos[0]}>
            {
              tooltipText === 'Click to copy'
                ? <div>Click to copy</div>
                : (
                  <div className="tooltip__email-copied">
                    Email Copied
                    <Check />
                  </div>
                )
            }
          </Tooltip>
        )
      }
      <div className={`about-me__bottom-divider about-me__bottom-divider--${theme}`} />
    </div>
  );
};

export default AboutMe;
