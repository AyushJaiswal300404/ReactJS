import React, {useState} from "react"

const CountButton = (props) => {
    //state using usestate
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    const divStyle = {
        color: "blue",
        border: "2px solid black",
        borderRadius: "5px",
        margin: "5px",
        padding: "5px",
        width: "100px",
        textAlign: "center"
    }

    const buttonStyles = {
        backgroundColor: props.buttonColor,
        color: "white",
        padding: "5px",
        margin: "5px",
        borderRadius: "5px",
    }

    return(
        <div style = {divStyle}>
            <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
            <div>{currentCount}</div>
        </div>
    ) 
}

export default CountButton