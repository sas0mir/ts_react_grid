import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import classes from './classes.module.scss'
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { ILink } from '../../constants';

interface SubnavigationProps {
    subLinks: ILink[],
}

const SubNavigation: FC<SubnavigationProps> = (props) => {

    const { subLinks } = props;

  //redux sample (create another slice file in features for breadcrumbs)
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <nav className={classes.subnavigation_container}>
        {subLinks.map(sub => {
            return <Link
            to={sub.url}
            key={sub.code}
          >
            {sub.name}
          </Link>
        })}
        <Outlet/>
    </nav>
  );
}

export default SubNavigation;
