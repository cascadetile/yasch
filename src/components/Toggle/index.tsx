/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './style.css';

interface Props {
  toggled: boolean
  onClick: (value: boolean) => void
}

export const Toggle: React.FC<Props> = ({ toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="toggle">
      <label className="toggle__label">
        <input className="toggle__input" type="checkbox" defaultChecked={isToggled} onClick={callback} />
        <span className="toggle__span" />
      </label>
    </div>
  );
};

export default Toggle;
