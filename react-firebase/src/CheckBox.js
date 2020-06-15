import React from 'react'

export default function CheckBox({name}) {
    return (
        <div>
            <input type="checkbox" id={name}/>
            <label for={name}>{name}</label>    
        </div>
    )
}
