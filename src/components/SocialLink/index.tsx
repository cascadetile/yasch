/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

interface Props {
  link: string,
  text: string
}

export const SocialLink: React.FC<Props> = ({ link, text }) => {
  const { theme } = useContext(ThemeContext);
  return <a href={link} target="_blank" rel="noreferrer" className={`social-link social-link--${theme}`}>{text}</a>;
};

export default SocialLink;
