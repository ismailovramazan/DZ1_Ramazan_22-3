import React from "react";
import classes from "./props.module.css";

const Props = (props) =>{
    return (
        <div className={classes.Props}>
            {props.content}
        </div>
    )
}
export default Props