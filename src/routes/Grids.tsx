import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import classes from './classes.module.scss';

interface GridsProps {
    
}

const Grids: FC<GridsProps> = (props) => {

  //const clientLinks = getSubLinks('clientlist');
    
  return (
    <div className={classes.grids_container}>
      <aside className={classes.grids_nested_nav}>
        <Link to="template1">Template 1</Link>
        <Link to="template2">Template 2</Link>
        <Link to="template3">Template 3</Link>
        <Link to="template4">Template 4</Link>
        <Link to="template5">Template 5</Link>
        <Link to="template6">Template 6</Link>
      </aside>
      <section>
        <h2>Grid templates</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo a nesciunt ab nihil atque, aspernatur illum. Possimus odio fugit iusto placeat temporibus alias eaque ipsa! Molestias dolorem expedita consequuntur praesentium?</p>
      </section>
    </div>
  );
}
export default Grids;