import React, { useState } from 'react';
import logo from './logo.svg';
import classes from './classes.module.scss'
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { navigationLinks, ILink } from '../../constants';
import SubNavigation from '../subnavigation';

function Navigation() {

  const  [showSubs, setShowSubs] = useState([{url: '*', name: 'TAP', code: 0}]);

  //redux sample (create another slice file in features for breadcrumbs)
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  console.log('SUBS->', showSubs);
  return (
    <nav className={classes.navigation}>
        <FontAwesomeIcon icon={faWifi} className={classes.navigation_link}/>
        <section className={classes.navigation_container}>
          {navigationLinks.map((link, index) => {
            console.log('EQU->', window.location.pathname === link.url, window.location.pathname, link.url);
            if (link.sublinks && link.sublinks.length > 1 && window.location.pathname === link.url) {
              setShowSubs(link.sublinks)
            }
            return <Link to={link.url} className={classes.navigation_link} key={link.code}>{link.name}</Link>
          })}
        </section>
        {showSubs ? <section className={classes.subnavigation_container}>
          {showSubs.map((sub, idx) => {
            console.log('SUB->', idx, sub);
            return <Link to={sub.url} className={classes.navigation_sublink} key={sub.code}>{sub.name}</Link>
          })}
        </section> : null}
        <Outlet/>
    </nav>
    
  );
}

export default Navigation;
