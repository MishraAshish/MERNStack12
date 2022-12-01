import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

let Header = (props)=>{
    let navigate = useNavigate();//this is called a useNavigate hook to navigate user on other page

    let func = function(event) {
        event.preventDefault();
        
        navigate('/about/5000');
    }

    return(
        <>
            <div>
                Hi, <b> Welcome to SynergisticIT Shopping Cart </b> 
            </div>
            <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeclassname="success" >User </NavLink> 
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>             

            <button onClick={func}>Go To About</button>
        </>
    )
}

export default Header;