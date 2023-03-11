/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';

interface IProps {
  imgUrl: string
}

export const TableHoverPicture: React.FC<IProps> = ({ imgUrl }) => {
  return (
    <div className="table-hover-picture">
      <img className="table-hover-picture__img" src={imgUrl} alt="Project preview" />
    </div>
  );
};

export default TableHoverPicture;
