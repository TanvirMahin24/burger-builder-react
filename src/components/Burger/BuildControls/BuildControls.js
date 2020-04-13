import React from 'react';
import './BuildControls.css';
import ControlItem from './ControlItem/ControlItem';

const controlList = [
    {label:"Salad", type : "salad"},
    {label:"Bacon", type : "bacon"},
    {label:"Meat", type : "meat"},
    {label:"Cheese", type : "cheese"}
]

const BuildControls = (props) => {
    return (
        <div className ="BuildControls">
            <h2>Total Price : {props.price.toFixed(0)}tk</h2><br/>
            {controlList.map((cntrl) => {
                return <ControlItem 
                    key={cntrl.label} 
                    label={cntrl.label} 
                    type={cntrl.type}
                    added={props.ingAdded}
                    removed={props.ingRemove}
                    disabled = {props.disabled[cntrl.type]}
                />;
            })}
            <button className="OrderButton" disabled = {!props.purchasable} onClick={props.ordering}>Order Now!!!</button>
        </div>
    )
}

export default BuildControls;