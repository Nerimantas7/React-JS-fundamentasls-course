import React from "react";

// function Welcome(){              //JavaScript function that a React element (JSX)

//     return <h1>Welcome, Nerimantas</h1>
// }

// export default Welcome

const Welcome = (props) => {                     //ES6 arrow function function that a React element (JSX)

    return <h1>Welcome, {props.name}</h1>;
}

export default Welcome