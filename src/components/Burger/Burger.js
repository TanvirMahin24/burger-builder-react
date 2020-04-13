import React from 'react';
import './Burger.css';
import Ingridient from './Ingridient/Ingridient';

const Burger = (props) => {
    let convertedIngridients = Object.keys(props.ingridients).map(key => {
        return [...Array(props.ingridients[key])].map((_,index) => {
            return <Ingridient key= {key + index} type={key}/>
        })
    }).reduce((arr, element) => {
        return arr.concat(element);
    },[]);

    if(convertedIngridients.length === 0){
        convertedIngridients = <p><b>Please insert Ingreditent!</b></p>
    }
    
    return (
        <div className="Burger">
            <Ingridient type="bread-top"/>
            {convertedIngridients}
            <Ingridient type="bread-bottom"/>
        </div>
    );
}

export default Burger;