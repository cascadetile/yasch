import React from 'react';
import './style.css';

export const AboutMe: React.FC = () => {
  return (
    <div className="about-me__wrapper">
      <div className="about-me">
        <div className="about-me__left">
          <div className="about-me__left-title-1">
            Welcome here, <span>I&apos;m Vlad!</span>
          </div>
          <div className="about-me__left-title-2">Creating seamless digital journeys.</div>
        </div>
        <div className="about-me__right">
          <div className="about-me__right-title-1">for collaborations</div>
          <div className="about-me__right-title-2">vlad@co.dev</div>
        </div>
      </div>
    </div>
  );
};
