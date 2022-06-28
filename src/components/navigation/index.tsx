import React, { FC, useState } from 'react';
import logo from './logo.svg';
import classes from './classes.module.scss'
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { navigationLinks, ILink } from '../../constants';
import SubNavigation from '../subnavigation';

interface INavigationProps {
  session: object
}

const Navigation: React.FC<INavigationProps> = (props) => {

  const { session } = props;
  const  [showSubs, setShowSubs] = useState([{url: 'test', name: 'TAP', code: 0}]);

  //redux sample (create another slice file in features for breadcrumbs)
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <nav className={classes.navigation}>
        <section className={classes.navigation_container}>
          <FontAwesomeIcon icon={faWifi} className={classes.navigation_link}/>
          {navigationLinks.map((link, index) => {
            if (link.sublinks && link.sublinks.length > 1 && window.location.pathname === link.url) {
              setShowSubs(link.sublinks)
            }
            return <Link to={link.url} className={classes.navigation_link} key={link.code}>{link.name}</Link>
          })}
        </section>
        {showSubs ? <section className={classes.subnavigation_container}>
          {showSubs.map((sub, idx) => {
            return <Link to={sub.url} className={classes.navigation_sublink} key={sub.code}>{sub.name}</Link>
          })}
        </section> : null}
        <Outlet/>
    </nav>
    
  );
}

export default Navigation;
