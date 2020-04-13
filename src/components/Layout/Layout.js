import React, { Component } from 'react';
import './Layout.css'
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer : false,
    }

    SideDrawerCloseHandeler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    DrawerToogleClicked = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render(){
        return (
            <Aux>
                <Toolbar DrawerToogleClicked={this.DrawerToogleClicked}/>
                <SideDrawer show={this.state.showSideDrawer}  closed={this.SideDrawerCloseHandeler}/>
                <main className = "Layout-Content">
                    {this.props.children}
                </main>
            </Aux>
        )   
    }  
}

export default Layout;