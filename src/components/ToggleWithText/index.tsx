/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './style.css';

interface Props {
  label: string
  toggled: boolean
  onClick: (value: boolean) => void
}

export const ToggleWithText: React.FC<Props> = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="toggle-with-text">
      <span className="toggle-with-text__text">{label}</span>
      <label className="toggle-with-text__label">
        <input className="toggle-with-text__input" type="checkbox" defaultChecked={isToggled} onClick={callback} />
        <span className="toggle-with-text__span" />
      </label>
    </div>
  );
};

export default ToggleWithText;
