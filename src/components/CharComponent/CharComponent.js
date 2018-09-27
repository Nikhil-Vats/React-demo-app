import React from 'react';
import classes from './Char.css';
const Char = (props) => {
    return (
        <div onClick={props.click} className={classes.Char}>
            <p>{props.alpha}</p>
        </div>
    )
};

export default Char;