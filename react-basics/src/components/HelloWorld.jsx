import React from "react"

const HelloWorld = () =>{

    // const myElement = <h1>Sveikas pasauli</h1>

    // return myElement

    // return React.createElement('h1', null, "Labas pasauli!")  // React.createElement code

    function handleClick(){
        alert("Button clicked!")
    }

    return(
        <>
        <h1>Pavadinimas</h1>
        <h2>Įvadas</h2>
        <p>Pastraipa</p>
        <button onClick={handleClick}>Click</button>
        </>
    )
}

export default HelloWorld