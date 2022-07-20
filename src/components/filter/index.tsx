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

    console.log('TYPE->', type === 'object', type, title);
    
  return (
    <div className={classes.component_filter_container}>
      <label htmlFor={title} className={classes.component_filter_label}>{title}</label>
      {type !== 'object' ?
      <input type={type} id={title} placeholder={value} onChange={(e) => change(title, e.target.value)} className={classes.component_filter_input}></input> :
      <select name={title} id={title} form={this} onSelect={(e) => change(title, e)} className={classes.component_filter_select}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      }
      
    </div>
  );
}
export default Filter;