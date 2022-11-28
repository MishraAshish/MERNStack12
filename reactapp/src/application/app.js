import React, { Component } from "react";

export default class ApplicationComponent extends Component{
    
    render(){
        let myName = "What's in the Name";
        let address = "Somewhere on earth"
        return(
            <div>
                <h1>The React Page</h1>

                <h4>{myName}</h4>
                <h6>{address}</h6>
            </div>
        )
    }

}