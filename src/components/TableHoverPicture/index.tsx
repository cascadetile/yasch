/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import './style.css';
import { ThemeContext } from '../../contexts';

interface IProps {
  imgUrl: string
}

export const TableHoverPicture: React.FC<IProps> = ({ imgUrl }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`table-hover-picture table-hover-picture--${theme}`}>
      <img className="table-hover-picture__img" src={imgUrl} alt="Project preview" />
    </div>
  );
};

export default TableHoverPicture;
