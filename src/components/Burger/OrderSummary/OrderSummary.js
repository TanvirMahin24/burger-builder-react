import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingList = Object.keys(props.ings).map( igKey => {
    return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ings[igKey]}</li>
    })
    return <Aux>
        <h3>Your Order Price : <strong>{props.totalPrice}</strong></h3>
        <p>A delescious Burger with the following ingredients :</p>
        <ul>
            {ingList}
        </ul>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.orderCancel}>Cancel</Button>
        <Button btnType="Success" clicked={props.orderContinue}>Continue</Button>
    </Aux>
}


export default OrderSummary;