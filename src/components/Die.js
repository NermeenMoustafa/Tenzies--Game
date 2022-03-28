import React from "react";

export default function Die(props){
    const styles = {
        // backgroundColor: props.held? "#C38370": "white",
        backgroundColor: props.held? "#302e2c": "white",       
        color: props.held? "white": "black"
    }
    return(
        <div style={styles} className="dieBox" onClick={props.hold}>{props.value}</div>
    )
}