import React from 'react';
import './Button.css';

const Button = (props) => {
    let classes = "CustomGenaralButton ";
    return (
        <button className={classes + props.btnType} onClick={props.clicked}>
            {props.children}
        </button>
    )
};

export default Button;