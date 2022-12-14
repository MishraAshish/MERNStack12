import React from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

let Header = (props)=>{
    let navigate = useNavigate();//this is called a useNavigate hook to navigate user on other page

    let func = function(event) {
        event.preventDefault();
        
        navigate('/about/5000');
    }

    let User = props.User;
    return(
        <>
            <div>
                Hi, <b> {props.headerTitle} </b> 
                <hr/>
                {User.userName} {User.street}
            </div>
            <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
            <NavLink to="/hooks" className="button" activeclassname="success" >Hooks </NavLink> 
            <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink> 
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

//to subscribe from the store 
let mapStateToProps = (state)=>{
    return {
        User : state.userReducer
    }
}

//export default Header;

export default connect(mapStateToProps, null)(Header);