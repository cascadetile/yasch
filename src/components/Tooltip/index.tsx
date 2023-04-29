/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';

interface IProps {
  posX: number
  posY: number
  children: React.ReactNode
}

export const Tooltip: React.FC<IProps> = ({ posX, posY, children }) => {
  return (
    <div style={{ left: posY, top: posX }} className="tooltip">
      {children}
    </div>
  );
};

export default Tooltip;
