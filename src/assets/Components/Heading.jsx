function Heading(props) {
    return (
        <h1 style={{color:props.color,fontSize:props.size,age:props.age}}>Hello, {props.name} {props.color} {props.age} </h1>
    )
}

export default Heading;