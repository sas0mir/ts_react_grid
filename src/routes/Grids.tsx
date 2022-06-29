import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { goto, goback } from '../features/navigation/navigationSlice';
import { Link } from 'react-router-dom';
import classes from './classes.module.scss';
import Grid from '../components/grid';
import { ILink, gridsLinks } from '../constants';

interface GridsProps {
    
}

const Grids: FC<GridsProps> = (props) => {

  const navState = useSelector((state: RootState) => state.navigation);
  const dispatch = useDispatch();

  const handleLinkClick = (link:ILink) => {
    let newHistory = [...navState.history, link.text];
    let newState = { current: link.to, prev: navState.current, history: newHistory };
    dispatch(goto(newState))
  }

  //const clientLinks = getSubLinks('clientlist');
//'https://jsonplaceholder.typicode.com/users'
//posts	100 posts
//comments	500 comments
//albums	100 albums
//photos	5000 photos
//todos	200 todos
//users	10 users
//onClick={e => handleLinkClick(link)}
  const api_url = navState.current === '/grids' ? '' : 'https://jsonplaceholder.typicode.com/' + navState.current;
    
  return (
    <div className={classes.grids_container}>
      <aside className={classes.grids_nested_nav}>
        {gridsLinks ? gridsLinks.map(link => {
            return <Link to={link.to} key={link.code} onClick={e => handleLinkClick(link)}>{link.text}</Link>
          }) : null}
      </aside>
      <section className={classes.grids_content}>
        <Grid title={api_url ? 'Fetched data from ' + api_url : 'Test grid'} api={api_url} data={{test: 1, id: 2}}/>
      </section>
    </div>
  );
}
export default Grids;