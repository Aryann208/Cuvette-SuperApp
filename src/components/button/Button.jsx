import React from 'react';
import classes from './Button.module.css';
const Button = ({ bgColor, btnText, textColor, onClick }) => {
  return (
    <button
      className={classes.PrimaryBtn}
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
