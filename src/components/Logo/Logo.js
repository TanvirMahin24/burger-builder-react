import React from 'react';
import appLogo from '../../assets/images/Burger-logo.png';
import './Logo.css';

const Logo = (props) => {
    return (
        <div className="Logo" style={{height: props.height}}>
            <img src={appLogo} alt="Burger Builder Logo"/>
        </div>
    )
}

export default Logo;