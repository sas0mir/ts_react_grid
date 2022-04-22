import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import classes from './classes.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
    customClass?: string,
    round?: boolean,
    icon?: string,
    placeholder?: string
}

const Input: FC<InputProps> = ({label, name, customClass, round, icon, placeholder, ...other}) => {
  
    const type = other.type;
    //todo round, icon
  return (
    <div className={classes.index_container + ' ' + customClass}>
      <label className='component_input_title' htmlFor={name}>{label}</label>
      <input type={type} id={name} className={''} placeholder={placeholder}/>
    </div>
  );
}
export default Input;