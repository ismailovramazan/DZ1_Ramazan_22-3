import React from "react";
import classes from "./Footer.module.css"

const Footer = ({footer}) => {
    return (
        <div className={classes.footer}>
            {footer.value = 'Name:Ismailov Ramazan'}
        </div>
    )
}

export default Footer