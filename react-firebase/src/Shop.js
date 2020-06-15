import React from 'react'
import Item from "./Item";
import Filter from "./Filter"
import "./Shop.css";


export default function Shop() {
    const items = [
        {
            name:"Nvidia Geforce GTX 1070 Ti",
            price:"$600",
            id:123,
        },
        {
            name:"AMD Ryzen 7 3600X",
            price:"$250",
            id:234,
        },
        {
            name:"CoolerMaster 212 Black Edition",
            price:"$50",
            id:334,
        },
        {
            name:"Nvidia Geforce GTX 1080 Ti",
            price:"$800",
            id:334,
        },        
    ];

    return(
        <div className="shop">
            <Filter />
            <div className="itemsContainer">
                <div className="items">
                    {
                        items.map((item)=>
                            <Item item={item} /> 
                        )            
                    } 
                </div>
            </div>  
        </div>     
    ) 
}
