/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

export const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`footer footer--${theme}`}>
      <div className="footer__left">Copyright © 2022 Vlad Yaschenkov </div>
      <div className="footer__right">All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
