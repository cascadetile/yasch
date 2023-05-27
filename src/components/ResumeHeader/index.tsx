/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { Logo } from '../../assets/Logo';
import { Toggle } from '../Toggle';
import { ThemeContext } from '../../contexts';

export const ResumeHeader: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const onToggleClick = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div className={`resume-header__wrapper resume-header__wrapper--${theme}`}>
      <div className="resume-header">
        <div>
          <Link to="/">
            <Logo theme={theme === 'dark' ? 'white' : 'black'} />
          </Link>
        </div>
        <div className="resume-header__menu" />
        <div className="resume-header__resume-and-toggle">
          <div className={`resume-header__menu-item resume-header__menu-item--resume resume-header__menu-item--resume-${theme}`}>
            <NavLink
              className={({ isActive }) => { return isActive ? 'resume-header__menu-item-link resume-header__menu-item-link--active' : 'resume-header__menu-item-link'; }}
              to="/"
            >
              Go Home
            </NavLink>
          </div>
          <Toggle toggled={theme === 'dark'} onClick={onToggleClick} />
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
