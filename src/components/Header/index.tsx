/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { Logo } from '../../assets/Logo';
import { Toggle } from '../Toggle';
import { ThemeContext } from '../../contexts';

export const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const onToggleClick = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const anchorId = entry.target.id;
        const menuItem = document.querySelector(`[data-href='#${anchorId}']`);
        if (entry.isIntersecting && menuItem) {
          menuItem.classList.add('header__menu-item-link--active');
        } else if (!entry.isIntersecting && menuItem) {
          menuItem.classList.remove('header__menu-item-link--active');
        }
      });
    }, { threshold: 0.7 });

    const anchors = document.querySelectorAll('.anchor');
    anchors.forEach((anchor) => {
      observer.observe(anchor);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`header__wrapper header__wrapper--${theme}`}>
      <div className="header">
        <div>
          <Link to="/">
            <Logo theme={theme === 'dark' ? 'white' : 'black'} />
          </Link>
        </div>
        <div className="header__menu">
          <button className="header__menu-item-button" type="button" onClick={() => window.scrollTo(0, 0)} data-href="#aboutme">Home</button>
          <div className="header__menu-item">
            <a href="#storyonme" data-href="#storyonme" className="header__menu-item-link">About me</a>
          </div>
          <div className="header__menu-item">
            <a href="#works" data-href="#works" className="header__menu-item-link">Works</a>
          </div>
          <div className="header__menu-item">
            <a href="#contacts" data-href="#contacts" className="header__menu-item-link">Contacts</a>
          </div>
        </div>
        <div className="header__resume-and-toggle">
          <div className={`header__menu-item header__menu-item--resume header__menu-item--resume-${theme}`}>
            <NavLink
              className={({ isActive }) => { return isActive ? 'header__menu-item-link header__menu-item-link--active' : 'header__menu-item-link'; }}
              to="/resume"
            >
              My resume
            </NavLink>
          </div>
          <Toggle toggled={theme === 'dark'} onClick={onToggleClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
