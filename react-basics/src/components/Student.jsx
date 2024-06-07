// const Student = (props) =>{
// const Student = ({firstName, lastName, email}) =>{
const Student = (props) =>{    

    const {firstName, lastName, email} = props

    return(
        <>
            {/* <h1>Student details</h1>
            <p>Student first name: {props.student.firstName}</p>
            <p>Student last name: {props.student.lastName}</p>
            <p>Student email: {props.student.email}</p> */}

            <h1>Student details</h1>
            <p>Student first name: {firstName}</p>
            <p>Student last name: {lastName}</p>
            <p>Student email: {email}</p>
        </>
    )
}

export default Student