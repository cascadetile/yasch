/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { Logo } from '../../assets/Logo';
import { Toggle } from '../Toggle';

interface IProps {
  hideMenu: boolean
}

export const Header: React.FC<IProps> = ({ hideMenu }) => {
  const onToggleClick = (value: boolean) => {
    console.log(value);
  };

  return (
    <div className="header__wrapper">
      <div className="header">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="header__menu">
          {
            !hideMenu
            && (
              <>
                <div className="header__menu-item header__menu-item--selected">
                  <NavLink
                    className={({ isActive }) => { return isActive ? 'header__menu-item-link header__menu-item-link--active' : 'header__menu-item-link'; }}
                    to="/"
                  >
                    Home
                  </NavLink>
                </div>
                <div className="header__menu-item">
                  <a href="#aboutme" className="header__menu-item-link">About me</a>
                </div>
                <div className="header__menu-item">
                  <a href="#works" className="header__menu-item-link">Works</a>
                </div>
                <div className="header__menu-item">
                  <a href="#contacts" className="header__menu-item-link">Contacts</a>
                </div>
              </>
            )
          }
        </div>
        <div className="header__resume-and-toggle">
          <div className="header__menu-item header__menu-item--resume">
            <NavLink
              className={({ isActive }) => { return isActive ? 'header__menu-item-link header__menu-item-link--active' : 'header__menu-item-link'; }}
              to="/resume"
            >
              My resume
            </NavLink>
          </div>
          <Toggle toggled={false} onClick={onToggleClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
