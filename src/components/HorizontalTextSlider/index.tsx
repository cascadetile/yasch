/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

export const HorizontalTextSlider: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [textSliderClassName1, setTextSliderClassName1] = useState('');
  const [textSliderClassName2, setTextSliderClassName2] = useState('');
  useEffect(() => {
    setTextSliderClassName1('horizontal-text-slider');
    setTextSliderClassName2('horizontal-text-slider__two');
  }, []);
  return (
    <div className={`horizontal-text-slider__wrapper horizontal-text-slider__wrapper--${theme}`}>
      <div className="horizontal-text-slider__animation-wrapper">
        <div className={textSliderClassName1}>
          &nbsp;ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span>
        </div>
        <div className={textSliderClassName2}>
          &nbsp;ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTextSlider;
