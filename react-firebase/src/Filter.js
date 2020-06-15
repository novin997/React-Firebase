import React from 'react'
import CheckBox from "./CheckBox"

export default function Filter() {
    const filterSytle = {
        display:"block"
    };
    
    return (
        <div className="filterContainer">
            <form action="">
                <input style={filterSytle} type="text" placeholder="Example: NVIDIA GEFORCE RTX2080 TI"/>
                <h1>Product Type</h1>
                    <CheckBox name="CPU"/>
                    <CheckBox name="Case"/>
                    <CheckBox name="MotherBoard"/>
                    <CheckBox name="CPU Cooling"/>
                <h1>GPU</h1>
                    <CheckBox name="Nvidia"/>
                    <CheckBox name="AMD"/>
                    <CheckBox name="Intel"/>
                <h1>CPU</h1>
                    <CheckBox name="AMD"/>
                    <CheckBox name="Intel"/>
                <h1>RAM</h1>
                    <CheckBox name="Corsair"/>
                    <CheckBox name="HyperX"/>
                    <CheckBox name="Kingston"/>
            </form>         
        </div>
    )
}
