import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import classes from './classes.module.scss';

interface TileProps {
    title: string,
    info?: string,
    size: string,
    click: (title: string) => void,
    type?: number
}

const Tile: FC<TileProps> = (props) => {

    const { title, info, size, click } = props;

  //const clientLinks = getSubLinks('clientlist');
    
  return (
    <div className={classes.component_tile_container} onClick={(e) => click(title)}>
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
}
export default Tile;