import React from 'react'

export default function Alert(props) {
    let capitalize = function (word) 
    { 
        if (word === 'danger')
        {
            return 'Error';
        }
        
        let lower = word.toLowerCase(); 
        return lower.charAt(0).toUpperCase() + lower.slice(1); 
    }

    return (
        <div style = {{height:'50px'}}>
        {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <div>
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
        </div>}
        </div>
    )
}
