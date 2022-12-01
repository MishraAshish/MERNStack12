import React, { Component,Suspense } from "react";
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";// browser router from react

import "./app.css";//css and style loaders are present in webpack config so we can use it here

import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundComponent";

export default class ApplicationComponent extends Component{
    constructor(props, context){
        super();

        this.state = {
            title : "Home Page Of Application",
            counter : 1
        }

        //this.increment();
    }

    increment = ()=>{
        setInterval(() => {
            this.state.counter++;
            this.setState({ // the reseved API to pass the message to react library to invoke render method so that new v-dom can be created
                counter : this.state.counter + 1
            })

            //we should avoid to use unless necessary
            //this.forceUpdate();//force update also calls render method but skips other life cycle methods
            console.log(this.state.counter);
        }, 1000);
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
                <Header/>                
                {/* <h4>{this.state.counter}</h4> */}
                
                {/* Here we'll use switch based conditions to render one component at a time */}
                <Routes>
                        <Route path="/" element={<Home  title={this.state.title} />} />
                        <Route path="/home" element={<Home  title="Home Component" />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about/:id" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer address1={address}/>
            </Router>
        )
    }

}