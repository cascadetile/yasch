/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './style.css';

export const HorizontalTextSlider: React.FC = () => {
  return (
    <div className="horizontal-text-slider__wrapper">
      <div className="horizontal-text-slider">
        &nbsp;ux/ui <span className="horizontal-text-slider__designer">designer</span> ux/ui <span className="horizontal-text-slider__designer">designer</span>
      </div>
      <div className="horizontal-text-slider__two">
        &nbsp;ux/ui <span className="horizontal-text-slider__designer">designer</span> ux/ui <span className="horizontal-text-slider__designer">designer</span>
      </div>
    </div>
  );
};

export default HorizontalTextSlider;
