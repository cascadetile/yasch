/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

export const ResumeStoryOnMe: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="resume-story-on-me">
      <div className={`resume-story-on-me__title resume-story-on-me__title--${theme}`}>
        The inside story on me
      </div>
      <div className={`resume-story-on-me__text resume-story-on-me__text--${theme}`}>
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
          I am proficient in design tools. I am always looking to learn and grow as a
          designer, and am excited to continue building my skills and expertise in the
          field..
        </div>
      </div>
    </div>
  );
};

export default ResumeStoryOnMe;
