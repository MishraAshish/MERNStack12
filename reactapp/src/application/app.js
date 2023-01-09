import React, { Component, lazy, Suspense } from "react";
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";// browser router from react

import "./app.css";//css and style loaders are present in webpack config so we can use it here

let Header = lazy(()=> import("./Common/HeaderComponent"));
let Footer = lazy(()=> import("./Common/FooterComponent"));
let Home = lazy(()=> import("./Common/HomeComponent"));
let About = lazy(()=> import("./Common/AboutComponent"));
let NotFound = lazy(()=> import("./Common/NotFoundComponent"));
//import User from "./AppComponents/UserComponent/UserComponent";
//import User from "./AppComponents/UserContainer/UserContainer";
let UserHook = lazy(()=> import("./AppComponents/UserComponent/UserHooks"));
//import UsingHooks from "./Hooks/UnderstandingHooks";
let ProductComponent = lazy(()=> import("./AppComponents/Product/ProductComponent"));
let DisplayProducts = lazy(()=> import("./AppComponents/Product/DisplayProduct"));
let CartComponent = lazy(()=> import("./AppComponents/Cart/CartComponent"));
let Checkout = lazy(()=> import("./AppComponents/Checkout/CheckoutComponent"));
let Coupon = lazy(()=> import("./AppComponents/Coupon/CouponComponent"));
//import Hooks from "./Hooks/UsingHooksMemo";

export default class ApplicationComponent extends Component{
    constructor(props, context){
        super();

        this.state = {
            title : "Home Page Of Application",
            counter : 1,
            headerTitle : "Welcome to SynergisticIT Shopping Cart"
        }
    }

    render(){
        console.log("Application Render!!");
        let myName = "What's in the Name";
        let address = "Somewhere on earth";
        let val1 = 2, val2 =5;//state and props
        //JSX - Javascript Like XML 
        return(
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header headerTitle={this.state.headerTitle}/>                
                    {/* Here we'll use switch based conditions to render one component at a time */}
                    <Routes>
                            <Route path="/" element={<Home  title={this.state.title} />} />
                            <Route path="/home" element={<Home  title="Home Component" />} />
                            <Route path="/user" element={<UserHook />} />
                            <Route path="/product" element={<ProductComponent />} />
                            <Route path="/cart" element={<CartComponent />} />
                            <Route path="/display" element={<DisplayProducts />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/coupon" element={<Coupon />} />
                            {/* <Route path="/hooks" element={<UsingHooks  name={"Mehejabeen"}/>} /> */}
                            <Route path="/about" element={<About />} />
                            {/* <Route path="/hooks" element={<Hooks />} /> */}
                            <Route path="/about/:id" element={<About />} />
                            <Route path="*" element={<NotFound />} />
                    </Routes>

                    <Footer address1={address}/>
                </Suspense>
            </Router>
        )
    }

}