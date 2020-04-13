import React from 'react';
import './ControlItem.css';

const ControlItem = (props) => {
    return (
        <div className = "BuildControl">
            <div className="Label">{props.label}</div>
            <button className="More" onClick={() => props.added(props.type)
            }>Add</button>
            <button className="Less"  onClick={() => props.removed(props.type)
            } disabled={props.disabled}>Remove</button>
        </div>
    )
}

export default ControlItem;