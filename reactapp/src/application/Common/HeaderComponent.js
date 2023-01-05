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

    let userName = props.User.userName;
    return(
        <>
            Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
            <div>
            <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
            <NavLink to="/hooks" className="button" activeclassname="success" >Hooks </NavLink> 
            <NavLink to="/user" className="button" activeclassname="success" >{userName == "" ? "Login" : "User"} </NavLink> 
            {userName &&
                <React.Fragment> 
                <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink> 
                <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink>
                <NavLink to="/checkout" className="button" activeclassname="success" >Checkout </NavLink>
                <NavLink to="/coupon" className="button" activeclassname="success" >Coupon </NavLink>
                    {/* <Dropdown as={ButtonGroup}>
                        <Button variant="success">Split Button</Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="/about">About</Dropdown.Item>
                            <Dropdown.Item href="/product">Product</Dropdown.Item>
                            <Dropdown.Item href="/checkout">Checkout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </React.Fragment>
            }
            {/* <button onClick={func}>Go To About</button> */}
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            {/* <button onClick={func}>Go To About</button> */}
            </div>
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