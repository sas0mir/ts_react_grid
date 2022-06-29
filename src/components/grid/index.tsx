import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import classes from './classes.module.scss';

interface GridProps {
    title?: string,
    api?: string,
    data: object
}

const Grid: FC<GridProps> = (props) => {
    const { title, api, data } = props;
    const [rows, setRows] = useState([]);
    const [oldApi, setOldApi] = useState('');

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

    const headers = rows.length ? Object.keys(rows[0]) : [];
    console.log('ROWS->', headers, rows);
  return (
    <div className={classes.grid_container}>
        <h3>{title}</h3>
      <section className={classes.grid_header}>
          {headers.length ? headers.map(h => <p>{'FILTER' + h}</p>) : <h4>No grid data</h4>}
      </section>
      <section className={classes.grid_body}>
          {rows.length ? <table>
              {rows.map((row, index) => {
                  if (index === 0) return <tr>{headers.map(header => <th>{header}</th>)}</tr>
                  else return <tr>{headers.map(h => <td>{typeof row[h] === 'object' ? 'test' : row[h]}</td>)}</tr>
              })}
          </table> : null}
      </section>
      <section className={classes.grid_pagination}></section>
    </div>
  );
}
export default Grid;