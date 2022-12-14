import React, { useState } from "react";

let DisplayDetailedProduct = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)

    return(
        <ul className="product">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
            {product.name}
                {showHide ? 
                    <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 
                </ul>: " "}
            </li>
        </ul>
    )

}

export default DisplayDetailedProduct;