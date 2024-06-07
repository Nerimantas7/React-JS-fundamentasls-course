import React from "react";

class Employee extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            firstName: "Tadas",
            lastName: "Blinda",
            email: "tadas.blinda@mail.lt"
        }
    }

    updateEmployee(){
        this.setState({
            firstName: "Vardenis",
            lastName: "Pavardenis",
            email: "vardenis.pavardenis@mail.lt"
        })
    }

    render(){
        return (
            <div>
                <h1>Employee details</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <button onClick={() => this.updateEmployee()}>Update Employee</button>
            </div>
        )
    }
}

export default Employee