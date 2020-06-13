import React from 'react'

export default function Item(props) {

    return (
        <div className="item">
            <h1>{props.item.name}</h1>
            <h1>{props.item.price}</h1>
            <h1>{props.item.id}</h1>    
        </div>
    )
}
