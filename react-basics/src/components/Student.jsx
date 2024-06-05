const Student = (props) =>{


    return(
        <>
            <h1>Student details</h1>
            <p>Student first name: {props.student.firstName}</p>
            <p>Student last name: {props.student.lastName}</p>
            <p>Student email: {props.student.email}</p>
        </>
    )
}

export default Student