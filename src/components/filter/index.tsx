import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import classes from './classes.module.scss';

interface FilterProps {
    title: string,
    data?: string[],
    value?: string,
    change: (field: string, value: any) => void,
    type?: string
}

const Filter: FC<FilterProps> = (props) => {

    const { title, data, value, change, type } = props;

  //const clientLinks = getSubLinks('clientlist');
    
  return (
    <div className={classes.component_filter_container}>
      <label htmlFor={title}>{title}</label>
      <input type='text' id={title} placeholder={value} onChange={(e) => change(title, e.target.value)}></input>
    </div>
  );
}
export default Filter;