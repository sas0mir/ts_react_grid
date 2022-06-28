import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import classes from './classes.module.scss';
import Tile from '../components/tile';

interface MainPageProps {
    
}

const MainPage: FC<MainPageProps> = (props) => {

  //const clientLinks = getSubLinks('clientlist');
    
  return (
    <div className={classes.mainpage_container}>
      <Tile title="GRID 1" info="default grid" size="medium"/>
      <Tile title="GRID 2" info="default grid" size="medium"/>
      <Tile title="GRID 3" info="default grid" size="medium"/>
      <Tile title="GRID 4" info="default grid" size="medium"/>
      <Tile title="GRID 5" info="default grid" size="medium"/>
      <Tile title="GRID 6" info="default grid" size="medium"/>
    </div>
  );
}
export default MainPage;