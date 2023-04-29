/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts';
import './style.css';

export const StoryOnMe: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="storyonme" className={`story-on-me__wrapper story-on-me__wrapper--${theme}`}>
      <div className="story-on-me">
        <div className={`story-on-me__left story-on-me__left--${theme}`}>
          The inside story on me
        </div>
        <div className={`story-on-me__right story-on-me__right--${theme}`}>
          <div>
            As a UX/UI designer with 2 years of experience, I have a strong foundation
            in user-centered design principles and a passion for creating intuitive and
            engaging user experiences. I have a keen eye for visual design and an ability
            to translate business goals and user needs into effective design solutions.
          </div>
          <div>
            In my current role, I have successfully designed and launched multiple web and
            mobile applications, and have worked with cross-functional teams to understand
            user needs and develop intuitive and user-friendly interfaces.
          </div>
          <div>
            <Link className={`story-on-me__resume-link story-on-me__resume-link--${theme}}`} to="/resume">
              See my resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryOnMe;
