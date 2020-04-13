import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.close}></div> : null
);

export default Backdrop;