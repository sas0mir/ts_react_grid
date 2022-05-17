import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import classes from './classes.module.scss'
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { ILink } from '../../constants';

interface SubnavigationProps {
    subLinks: ILink[],
}

const SubNavigation: FC<SubnavigationProps> = (props) => {

    const { subLinks } = props;

    const [openSublinks, setOpenSublinks] = useState(0);

  //redux sample (create another slice file in features for breadcrumbs)
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    subLinks.map(sub => {
      const testregex = new RegExp('/' + sub + '&');
      if (testregex.test(window.location.pathname)) {
        setOpenSublinks(sub.code);
      }
    })
  })

  const handleLinkClick = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log('EVENT->', e.target);
    if (openSublinks > 0) {
      setOpenSublinks(0)
    }
    //setOpenSublinks(e)
  }
  //const active = params. придумай что брать из урла
  return (
    <nav className={classes.subnavigation_container}>
        {subLinks.map((sublink, index) => {
          if (sublink.sublinks) {
            return <nav className='withsubs'>
              <Link to={sublink.url} key={sublink.code}>{sublink.name}</Link>
              <div className='doublesublinks'>{sublink.sublinks.map((sub, idx) => {
              return <Link to={sub.url} key={sub.code} onClick={(e) => handleLinkClick(e)}>{sub.name}</Link>
            })}</div>
            </nav>
          } else {
            return <Link to={sublink.url} key={sublink.code}>{sublink.name}</Link>
          }
        })}
        <Outlet/>
    </nav>
  );
}

export default SubNavigation;
