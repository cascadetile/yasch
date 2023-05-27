/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ThemeContext } from '../../contexts';
import './style.css';

export const HorizontalTextSlider: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const textOne = useRef<HTMLDivElement>(null);
  const [textSliderClassName1, setTextSliderClassName1] = useState('');
  const [textSliderClassName2, setTextSliderClassName2] = useState('');
  const changeAnimationClass = () => {
    setTextSliderClassName1('horizontal-text-slider horizontal-text-slider__two');
  };
  useEffect(() => {
    setTextSliderClassName1('horizontal-text-slider horizontal-text-slider__one');
    setTextSliderClassName2('horizontal-text-slider horizontal-text-slider__two');
    if (textOne.current) {
      textOne.current.addEventListener('animationiteration', () => {
        changeAnimationClass();
        textOne.current?.removeEventListener('animationiteration', changeAnimationClass);
      });
    }
  }, []);
  return (
    <div className={`horizontal-text-slider__wrapper horizontal-text-slider__wrapper--${theme}`}>
      <div className="horizontal-text-slider__animation-wrapper">
        <div ref={textOne} className={textSliderClassName1}>
          &nbsp;ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span>
        </div>
        <div className={textSliderClassName2}>
          &nbsp;ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span> ux/ui <span className={`horizontal-text-slider__designer horizontal-text-slider__designer--${theme}`}>designer</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTextSlider;
