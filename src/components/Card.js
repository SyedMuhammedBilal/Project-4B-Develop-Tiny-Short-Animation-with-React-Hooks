import React from 'react'
import './Card.css'

export default function Card() {

    const names = {
        "Box-01": { name: "Card-01" },
        "Box-02": { name: "Card-02" }, 
        "Box-03": { name: "Card-03" }
    };

    return (
        <div className="container">
            {
                Object.keys(names).map(keyName => {
                    const name = names[keyName];
                    return(   
                        <div class="container">
                            <div className="box"><h2>{name.name}</h2></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

