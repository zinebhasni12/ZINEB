import Heading from "./components/heading";

function Heading(props) {
    return (
        <h1 style={{color:props.color,fontSize:props.size}}>Hello, {props.name} {props.color} {props.age}  </h1>
    )
}

export default Heading;