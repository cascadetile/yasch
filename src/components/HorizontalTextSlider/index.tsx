/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

export const HorizontalTextSlider: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`horizontal-text-slider__wrapper horizontal-text-slider__wrapper--${theme}`}>
      <div className="horizontal-text-slider">
        &nbsp;ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span>
      </div>
      <div className="horizontal-text-slider__two">
        &nbsp;ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span>
      </div>
    </div>
  );
};

export default HorizontalTextSlider;
