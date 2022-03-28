import React from "react";

export default function ToggleButton(props){
    return(
        //here i received the function as props and i make it run when click the button so it work there in the parent component
        <button className="togglePositionButton" onClick={props.handleClick}>Toggle Position</button>
    )
}