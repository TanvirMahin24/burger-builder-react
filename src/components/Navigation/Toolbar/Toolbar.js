import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <DrawerToogle clicked = {props.DrawerToogleClicked}/>
            <Logo height="80%"/>
            <nav>
                <NavItems/>
            </nav>
        </header>
    )
}

export default Toolbar;