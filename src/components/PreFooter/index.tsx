/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext, useState } from 'react';
import './style.css';
import axios from 'axios';
import { SocialLink } from '../SocialLink';
import { YourAndMyTime } from '../YourAndMyTime';
import { ThemeContext } from '../../contexts';

export const PreFooter: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [emailInputVal, setEmailInputVal] = useState('');
  const [isEmailInputDisabled, setIsEmailInputDisabled] = useState(false);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailInputVal !== '') {
      try {
        setIsEmailInputDisabled(true);
        await axios({
          method: 'POST',
          url: 'https://mail-sender-api-n1zm.onrender.com/email',
          data: {
            email: emailInputVal,
          },
        });
        setEmailInputVal('');
      } catch (error) {
        //
      } finally {
        setIsEmailInputDisabled(false);
      }
    }
  };
  return (
    <div id="contacts" className={`anchor prefooter__wrapper prefooter__wrapper--${theme}`}>
      <div className="prefooter">
        <div className="prefooter__time-and-title-wrapper">
          <div className="prefooter__time-wrapper">
            <YourAndMyTime />
          </div>
          <div className="prefooter__title-wrapper">
            <div className={`prefooter__title-1 prefooter__title-1--${theme}`}>Thanks for stopping by!</div>
            <div className={`prefooter__title-2 prefooter__title-2--${theme}`}>
              If you like the work you’ve seen so far, let’s connect.
            </div>
          </div>
        </div>
        <div className="prefooter__email-and-links">
          <form onSubmit={(e) => sendEmail(e)}>
            <div className="prefooter__email-form">
              <input
                value={emailInputVal}
                onInput={(e) => setEmailInputVal((e.target as HTMLInputElement).value)}
                className={`prefooter__email-input prefooter__email-input--${theme}`}
                type="text"
                placeholder="Enter your email address"
              />
              <button
                disabled={isEmailInputDisabled}
                className={`prefooter__email-btn prefooter__email-btn--${theme}`}
                type="submit"
              >
                Connect
              </button>
            </div>
          </form>
          <div className="prefooter__links">
            <SocialLink link="https://www.linkedin.com/in/pinkaversa" text="LinkedIn" />
            <SocialLink link="https://dribbble.com/PinkAversa" text="Dribbble" />
            <SocialLink link="https://www.behance.net/aversa" text="Behance" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
