import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

const CatalogItemCreate: FC<InputProps> = (props) => {

  //const clientLinks = getSubLinks('clientlist');
    
  return (
    <div className="component_input_container">
      <h2>Create new item card</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo a nesciunt ab nihil atque, aspernatur illum. Possimus odio fugit iusto placeat temporibus alias eaque ipsa! Molestias dolorem expedita consequuntur praesentium?</p>
    </div>
  );
}
export default CatalogItemCreate;