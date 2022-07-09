import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import classes from './classes.module.scss';
import Tile from '../components/tile';
import { useNavigate } from 'react-router-dom';
import { ITile, Tiles } from '../constants';
import { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { goto, goback } from '../features/navigation/navigationSlice';

interface MainPageProps {
    
}

const MainPage: FC<MainPageProps> = (props) => {

  const navState = useSelector((state: RootState) => state.navigation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (title:string) => {
    let newHistory = [...navState.history, title];
    let newState = { current: title.toLowerCase(), prev: navState.current, history: newHistory };
    dispatch(goto(newState))
    navigate('../grids/' + title.toLowerCase(), { replace: true });
  }
    
  return (
    <div className={classes.mainpage_container}>
      {Tiles ? Tiles.map((tile, index) => {
        return <Tile title={tile.title} info={tile.info} size="medium" click={handleClick} type={tile.type}/>
      }) : null}
    </div>
  );
}
export default MainPage;