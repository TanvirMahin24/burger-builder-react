import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    let classes = "SideDrawer close";
    if(props.show){
        classes = "SideDrawer open";
    }
    return (
        <Aux>
            <Backdrop show={props.show} close={props.closed}/>
            <div className={classes}>
            <Logo height="11%"/>
            <nav>
                <NavItems/>
            </nav>
        </div>
        </Aux>
    )
}

export default SideDrawer;