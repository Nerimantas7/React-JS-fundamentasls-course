import React from "react";

class Greeting extends React.Component{         //ES6 class that extends React.Component and returns a React element(JSX)

    render(){
    return <h1>Laba diena, {this.props.name}</h1>
    }
}

export default Greeting