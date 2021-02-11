import React from 'react';
import Counter from '../Counter/Counter';

export default(props) => {
    const inputClass = ['input-area'];

    if (props.price.length <= 10) {
        inputClass.push('input-area');
    } else {
        inputClass.push('active-area-red');
    }

    return (
        <div className="device-inner">
            <div className="input-change-name">
                <input 
                className={inputClass.join(' ')}
                onChange={props.inputChangePrice}/>
            </div>
            <h3>{props.brand}</h3>
            <p className="device-model">{props.model}</p>
            <p className="device-price">{props.price}</p>
            <button 
                onClick={props.btnTitleMonitors} 
                className="btn_sale">Sale it</button>
            <button 
                onClick={props.btnDeleteMonitors} 
                className="btn_delete">Delete</button>
            <Counter />
        </div>
    )
}