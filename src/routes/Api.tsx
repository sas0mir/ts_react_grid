import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import classes from './classes.module.scss';

interface ApiProps {
    
}

const Api: FC<ApiProps> = (props) => {

  //const clientLinks = getSubLinks('clientlist');
    
  return (
    <div className="api_container">
      <h2>Api</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo a nesciunt ab nihil atque, aspernatur illum. Possimus odio fugit iusto placeat temporibus alias eaque ipsa! Molestias dolorem expedita consequuntur praesentium?</p>
    </div>
  );
}
export default Api;