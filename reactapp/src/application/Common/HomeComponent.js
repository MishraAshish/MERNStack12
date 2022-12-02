import React, { Component, PureComponent } from "react";
import About from "./AboutComponent";
import ChildComponent from "./ChildFunction";
import NotFound from "./NotFoundComponent";

//export default class HomeComponent extends Component {
export default class HomeComponent extends PureComponent { //Pure Component has implementation of shouldComponentUpdate
    constructor(props){
        super();
        this.state = {
            age : 20,
            name : "Synergistic IT",
            counter : 1
        }
        //getAllDistricts() - server call not allowed here
        //we can't access the html
        this.interval = "";//global variable of the class
        this.user = {UserName:"Paribesh", Password : "Tegdeep"}
    }

    increment = ()=>{
        this.interval = setInterval(() => {
            //this.state.counter++; //it will update the state value but not call the render

            this.setState({ // the reseved API to pass the message to react library to invoke render method so that new v-dom can be created
                counter : this.state.counter + 1
            })

            //we should avoid to use unless necessary
            //this.forceUpdate();//force update also calls render method but skips other life cycle methods
            console.log(this.state.counter);
        }, 1000);
    }

    //creation life cycle method
    componentDidMount(){
        console.log("Component Did Mount - Rendered On Browser");
        //this.increment();
        //we can access the html and make call to server to fetch more data
        //getAllDistricts()
    }

    //fetch the list of districts - ajax call
    // getAllDistricts(countryidFromIPAdress){
    // }    

    //update life cycle method
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextState)
    //     console.log(nextProps)

    //     if (nextState.age == this.state.age) {//if the updated value of age is same then don't call render method
            
    //         return false;//it will not call the render method so the new v-dom will not be created
    //     } 
    //     return true; //it will invoke the render method
    // }

    // getSnapshotBeforeUpdate(prevState, prevProps){
    //     console.log("getSnapshotBeforeUpdate");
    //     console.log("prevState", prevState);
    //     console.log("prevProps", prevProps);
    //     return {
    //         prevState,
    //         prevProps
    //     }
    // }

    // componentDidUpdate(prevState, prevProps){
    //     console.log("componentDidUpdate");
    //     console.log("prevState",prevState);
    //     console.log("prevProps", prevProps);
    // }

    clickEventHandler = (evt)=>{
        //alert("Button is Clicked!!")
        this.setState({
            age : this.state.age + 1
        })
        console.log(this.state.age);
        // this.state.age++;
        // this.forceUpdate();
    }


    //destruction life cycle method
    componentWillUnmount(){
        //we should use this LC method to remove all the subscriptions and any calls like setinterval 
        console.log("Component Will Unmount");
        //debugger;
        clearInterval(this.interval);
    }

    childClick = (age)=>{
        alert("Handler Passed to Child and Invoked by child component!!!")
        this.setState({
            age : age
        })
    }

    //creation and updation life cycle method
    render(){
        console.log("Home Render!!");

        return(
            <>
                <h2>{this.props.title}</h2>
                <label> {this.state.age} </label>

                <ChildComponent name="Mehejabeen" user={this.user} clickOnChild={this.childClick}>
                    <About/>
                    <NotFound/>
                </ChildComponent>
                
                <h4>{this.state.counter}</h4>
                <button onClick={this.clickEventHandler}>Increment Age</button>
            </>
        )
    }

}