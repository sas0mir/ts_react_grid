import React from 'react';
import logo from './logo.svg';
import classes from './classes.module.scss'
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

function Navigation() {

  //redux sample (create another slice file in features for breadcrumbs)
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.navigation_container}>
        <FontAwesomeIcon icon={faWifi}/>
        <Link to={'/'} className={classes.navigation_link}>Main page</Link>
        <Link to={'/clientlist'} className={classes.navigation_link}>Client list</Link>
        <Link to={'/testrouteone'} className={classes.navigation_link}>testrouteone</Link>
    </div>
  );
}

export default Navigation;
