// props = read-only properties that are shared between components.
// A parent component can send data to a child component.
// <Component key-value />
import PropTypes from "prop-types"
function Student(props){
    return(
        <div className="Student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>student :{props.isStudent ? "yes": "no"}</p>
        </div>
    );
}
// defaultProps = default values for props in case they are not
// passed from the parent component
// name: "Guest"|
Student.defaultProps ={
    name:"guest",
    age:0,
    isstudent:false,
}
// propTypes = a mechanism that ensures that the passed value
//  is of the correct datatype.
//age: PropTypes.number
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
    // if propTypes is not Matched it will give an error in console
}
export default Student