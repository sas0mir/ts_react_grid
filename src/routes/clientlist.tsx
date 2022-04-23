import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import Navigation from '../components/navigation';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

const ClientList: FC<InputProps> = (props) => {
    
  return (
    <div className="component_input_container">
        <Navigation/>
      <h2>Client list</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo a nesciunt ab nihil atque, aspernatur illum. Possimus odio fugit iusto placeat temporibus alias eaque ipsa! Molestias dolorem expedita consequuntur praesentium?</p>
    </div>
  );
}
export default ClientList;