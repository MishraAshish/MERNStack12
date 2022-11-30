import React, { Component } from "react";
import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import Home from "./Common/HomeComponent";

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
            <>
                <Header/>
                
                <h4>{this.state.counter}</h4>
                
                <Home title={this.state.title}/>
                {/* <div>
                    <h1>The React Page</h1>

                    <h4>{myName}</h4>
                    <h6>{address}</h6>
                </div>
                
                <div>
                    <h1>The React Page 2 2</h1>

                    <h4>{val1 + val2}</h4>
                    <h6>{val1 * val2}</h6>
                </div> */}

                <Footer address1={address}/>
            </>
        )
    }

}