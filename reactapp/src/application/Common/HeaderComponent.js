import React from "react";
import PropTypes from "prop-types";
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
                Hi, <b> {props.headerTitle} </b> 
            </div>
            <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeclassname="success" >User </NavLink> 
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>             

            <button onClick={func}>Go To About</button>
        </>
    )
}

// Header.defaultProps = {
//     headerTitle : "Header Default Component"
// }

Header.propTypes = {
    headerTitle : PropTypes.string.isRequired
}

export default Header;