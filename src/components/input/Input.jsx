import React from 'react';
import classes from './Input.module.css';
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
