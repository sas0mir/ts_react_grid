import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
    customClass?: string,
    round?: boolean,
    icon?: string,
    placeholder?: string
}

const Input: FC<InputProps> = ({label, name, customClass, round, icon, placeholder}) => {
    const classes = 'component_input' + customClass;
    //todo round, icon
  return (
    <div className="component_input_container">
      <label className='component_input_title' htmlFor={name}>{label}</label>
      <input type="text" id={name} className={classes} placeholder={placeholder}/>
    </div>
  );
}
export default Input;