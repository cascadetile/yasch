/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';
import { SocialLink } from '../SocialLink';
import { YourAndMyTime } from '../YourAndMyTime';

export const PreFooter: React.FC = () => {
  return (
    <div className="prefooter">
      <YourAndMyTime />
      <div className="prefooter__title-wrapper">
        <div className="prefooter__title-1">Thanks for stopping by!</div>
        <div className="prefooter__title-2">If you like the work you’ve seen so far, let’s connect.</div>
      </div>
      <div className="prefooter__email-and-links">
        <form>
          <div className="prefooter__email-form">
            <input className="prefooter__email-input" type="text" placeholder="Enter your email address" />
            <button className="prefooter__email-btn" type="submit">Connect</button>
          </div>
        </form>
        <div className="prefooter__links">
          <SocialLink link="https://www.linkedin.com/in/pinkaversa" text="LinkedIn" />
          <SocialLink link="https://dribbble.com/PinkAversa" text="Dribbble" />
          <SocialLink link="https://www.behance.net/aversa" text="Behance" />
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
