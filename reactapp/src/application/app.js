import React, { Component,Suspense } from "react";
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";// browser router from react

import "./app.css";//css and style loaders are present in webpack config so we can use it here

import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundComponent";
//import User from "./AppComponents/UserComponent/UserComponent";
import User from "./AppComponents/UserContainer/UserContainer";
import UserHook from "./AppComponents/UserComponent/UserHooks";
import UsingHooks from "./Hooks/UnderstandingHooks";
import ProductComponent from "./AppComponents/Product/ProductComponent";
import DisplayProducts from "./AppComponents/Product/DisplayProduct";
import CartComponent from "./AppComponents/Cart/CartComponent";

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
                <Suspense fallback={<div>Loading...</div>}></Suspense>
                <Header headerTitle={this.state.headerTitle}/>                
                {/* Here we'll use switch based conditions to render one component at a time */}
                <Routes>
                        <Route path="/" element={<Home  title={this.state.title} />} />
                        <Route path="/home" element={<Home  title="Home Component" />} />
                        <Route path="/user" element={<UserHook />} />
                        <Route path="/product" element={<ProductComponent />} />
                        <Route path="/cart" element={<CartComponent />} />
                        <Route path="/display" element={<DisplayProducts />} />
                        <Route path="/hooks" element={<UsingHooks  name={"Mehejabeen"}/>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about/:id" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer address1={address}/>
            </Router>
        )
    }

}