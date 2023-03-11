/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';

interface IProps {
  text: string
  posX: number
  posY: number
}

export const Tooltip: React.FC<IProps> = ({ text, posX, posY }) => {
  return (
    <div style={{ left: posY, top: posX }} className="tooltip">
      {text}
    </div>
  );
};

export default Tooltip;
