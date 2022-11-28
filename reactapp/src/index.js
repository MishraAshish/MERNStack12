console.log("The very first javascript file we loaded")
//alert("We'll work on react content next")
import React from "react";
import * as ReactDOM from 'react-dom/client';

//import { ApplicationComponent } from "./application/app"; //named import
import ApplicationComponent  from "./application/app"; //default import

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <ApplicationComponent />
);//bootstrapping react application on index.html page