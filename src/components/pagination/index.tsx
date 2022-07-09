import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import classes from './classes.module.scss';

interface IPaginationValues {
    page: number,
    count: number,
}

interface PaginationProps {
    values: IPaginationValues,
    change: (page: number, count: number) => void,
}

const Pagination: FC<PaginationProps> = (props) => {

    const { values, change } = props;
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if(values) {
            setCount(values.count);
            setPage(values.page);
        }
    })

    const handleChange = (page: number, count:number) => {
        setPage(page);
        setCount(count);
        change(page, count);
    }
    
  return (
    <div className={classes.component_pagination_container}>
      <button onClick={e => handleChange(page - 1, count)}>{'<'}</button>
      <input type='number' value={count} onChange={(e) => handleChange(count, Number(e.target.value))}></input>
      <button onClick={e => handleChange(page + 1, count)}>{'>'}</button>
    </div>
  );
}
export default Pagination;