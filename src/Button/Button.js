import React from "react";
import classes from "./Button.module.css";


export const Button1 = ({ handleClick, text }) => {
        return (
        <button className={classes.Button} onClick={() => handleClick('Salam Aleykum')}>
            {text}
        </button>
    )
}
export const Button2 = ({clickHandle,text }) => {
    return (
        <button className={classes.Button} onClick={() => clickHandle("Ualeikum Assalam")}>
            {text}
        </button>
    )
}


