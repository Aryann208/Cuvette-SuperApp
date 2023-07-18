import React from 'react';
import classes from './CategoryHolder.module.css';

const CategoryHolder = ({ id, name, image, color, onClick, selected }) => {
  const containerClassName = `${classes.CategoryHolderContainer} ${
    selected ? classes.SelectedCategory : ''
  }`;

  return (
    <div
      className={containerClassName}
      style={{ background: color }}
      key={id}
      onClick={onClick}
    >
      <h2>{name}</h2>
      <img src={image} alt="" />
    </div>
  );
};

export default CategoryHolder;
