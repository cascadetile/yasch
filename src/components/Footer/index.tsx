/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

export const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`footer footer--${theme}`}>
      <div className="footer__left">
        <div className="footer__left-md-plus">Copyright&nbsp;©&nbsp;2023 Vlad&nbsp;Yaschenkov</div>
        <div className="footer__left-sm">© 2023</div>
      </div>
      <div className="footer__right">
        Developed&nbsp;by: <a className={`footer__right-link footer__right-link--${theme}`} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/temirlan-aryngazy-900273256">Temirlan Aryngazy</a>
      </div>
    </div>
  );
};

export default Footer;
