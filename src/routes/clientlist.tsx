import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import Navigation from '../components/navigation';
import SubNavigation from '../components/subnavigation'
import { getSubLinks } from '../constants'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

const ClientList: FC<InputProps> = (props) => {

  const clientLinks = getSubLinks('clientlist');
    
  return (
    <div className="component_input_container">
        <Navigation/>
        <SubNavigation subLinks={clientLinks}/>
      <h2>Client list</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo a nesciunt ab nihil atque, aspernatur illum. Possimus odio fugit iusto placeat temporibus alias eaque ipsa! Molestias dolorem expedita consequuntur praesentium?</p>
    </div>
  );
}
export default ClientList;