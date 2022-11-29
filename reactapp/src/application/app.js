import React, { Component } from "react";
import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";

export default class ApplicationComponent extends Component{
    
    render(){
        let myName = "What's in the Name";
        let address = "Somewhere on earth";
        let val1 = 2, val2 =5;//state and props
        //JSX - Javascript Like XML 
        return(
            <>
                <Header/>

                <div>
                    <h1>The React Page</h1>

                    <h4>{myName}</h4>
                    <h6>{address}</h6>
                </div>
                
                <div>
                    <h1>The React Page 2 2</h1>

                    <h4>{val1 + val2}</h4>
                    <h6>{val1 * val2}</h6>
                </div>

                <Footer />
            </>
        )
    }

}