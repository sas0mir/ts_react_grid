import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import Navigation from '../components/navigation';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

const TestRouteOne: FC<InputProps> = (props) => {
    
  return (
    <div className="component_input_container">
      <h2>ROUTE ONE</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo a nesciunt ab nihil atque, aspernatur illum. Possimus odio fugit iusto placeat temporibus alias eaque ipsa! Molestias dolorem expedita consequuntur praesentium?</p>
    </div>
  );
}
export default TestRouteOne;