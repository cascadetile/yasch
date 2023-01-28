/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';

interface Props {
  link: string,
  text: string
}

export const SocialLink: React.FC<Props> = ({ link, text }) => {
  return <a href={link} className="social-link">{text}</a>;
};

export default SocialLink;
