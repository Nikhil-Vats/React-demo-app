import React from 'react';
import './Char.css';
const Char = (props) => {
    return (
        <div onClick={props.click} className="char">
            <p>{props.alpha}</p>
        </div>
    )
};

export default Char;