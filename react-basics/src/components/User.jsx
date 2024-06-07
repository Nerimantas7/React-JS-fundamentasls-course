import { useState } from "react"

const User = () => {

    // const [firstName, setFirstName] = useState('Tadas')
    // const [lastName, setLastName] = useState('Blinda')
    // const [email, setEmail] = useState('tadas.blinda@mail.lt')

const [user, setUser] = useState({
    firstName: "Jonas",
    lastName: "Jonaitis",
    email: "jonas@mail.lt"
})

    function updateUser(){
        // setFirstName('Vardenis')
        // setLastName('Pavardenis')
        // setEmail('vardenis.pavardenis@mail.lt')
        setUser({
            firstName: 'Vardene',
            lastName: 'Pavardene',
            email: 'vardene@mail.lt'
        })

    }

    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    )
}

export default User