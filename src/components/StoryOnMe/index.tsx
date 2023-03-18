/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const StoryOnMe: React.FC = () => {
  return (
    <div className="story-on-me__wrapper">
      <div className="story-on-me">
        <div className="story-on-me__left">
          The inside story on me
        </div>
        <div className="story-on-me__right">
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
            <Link className="story-on-me__resume-link" to="/resume">
              See my resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryOnMe;
