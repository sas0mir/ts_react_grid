import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import classes from './classes.module.scss';
import Filter from '../filter';
import Pagination from '../pagination';

interface GridProps {
    title?: string,
    api?: string,
    data: object
}

const Grid: FC<GridProps> = (props) => {
    const { title, api, data } = props;
    const [rows, setRows] = useState([]);
    const [oldApi, setOldApi] = useState('');
    const [filters, setFilters] = useState({});

    useEffect(() => {
        if (api && api !== oldApi) {
            setOldApi(api);

            const fetchData = async () => {
                const response = await fetch(api);
                const json = await response.json();
                setRows(json);
            }

            fetchData()
            .catch(console.error);;
            //return //() => isSubscribed = false;
        }
    }, [api])

    const handleFilterChange = (field:string, value:any) => {
        setFilters({...filters, [field]: value});
    }

    const applyFilters = () => {
        console.log('Filters->', filters, rows);
        if(rows) {
            let keys = Object.keys(filters);
            let newRows = rows.filter((row, index) => {
                for (let key in keys) {
                    //row[key] === filters[key] 
                }
            })
            console.log('NEWROWS->', newRows);
        }
    }

    const handlePagination = (page: number, count: number) => {
        if (rows) {
            console.log('PAGINATION->', page, count);
        }
    }

    const headers = rows.length ? Object.keys(rows[0]) : [];
    
  return (
    <div className={classes.grid_container}>
        <h3>{title}</h3>
      <section className={classes.grid_header}>
          {headers.length ? headers.map(h => <Filter title={h} change={handleFilterChange}/>) : <h4>No filters</h4>}
          <button className={classes.grid_header_btn} onClick={applyFilters}>Filter</button>
      </section>
      <section className={classes.grid_body}>
          {rows.length ? <table className={classes.grid_table}>
              {rows.map((row, index) => {
                  if (index === 0) return <tr>{headers.map(header => <th>{header}</th>)}</tr>
                  else return <tr>{headers.map(h => <td>{typeof row[h] === 'object' ? 'test' : row[h]}</td>)}</tr>
              })}
          </table> : null}
      </section>
      <section className={classes.grid_pagination}>
          <Pagination values={{page: 1, count: 10}} change={handlePagination}/>
      </section>
    </div>
  );
}
export default Grid;