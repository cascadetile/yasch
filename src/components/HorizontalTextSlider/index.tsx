import React, { useEffect, useRef } from 'react';
import './style.css';

export const HorizontalTextSlider: React.FC = () => {
  const slideOne = useRef<HTMLSpanElement>(null);
  const slideTwo = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (slideOne.current) {
      slideOne.current.addEventListener('animationiteration', () => {
        if (slideOne.current && slideTwo.current) {
          slideOne.current.style.animationPlayState = 'paused';
          slideTwo.current.style.animationPlayState = 'paused';
          setTimeout(() => {
            if (slideOne.current && slideTwo.current) {
              slideOne.current.style.animationPlayState = 'running';
              slideTwo.current.style.animationPlayState = 'running';
            }
          }, 1000);
        }
      });
    }
  }, []);

  return (
    <div className="horizontal-text-slider">
      <p className="horizontal-text-slider__marquee">
        <span ref={slideOne} className="horizontal-text-slider__span">
          ux/ui <span className="horizontal-text-slider__designer">designer</span> ux/ui <span className="horizontal-text-slider__designer">designer</span>&nbsp;
        </span>
      </p>
      <p className="horizontal-text-slider__marquee horizontal-text-slider__marquee2">
        <span ref={slideTwo} className="horizontal-text-slider__span">
          ux/ui <span className="horizontal-text-slider__designer">designer</span> ux/ui <span className="horizontal-text-slider__designer">designer</span>&nbsp;
        </span>
      </p>
    </div>
  );
};
