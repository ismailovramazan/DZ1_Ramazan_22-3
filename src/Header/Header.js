import React from "react";
import classes from "./Header.module.css";
const Header = ({ menuList }) => {
    console.log(menuList, 'list');
    return (
        <div className={classes.Header}>
                    Header
            <div>
                 Main
            </div>
            {menuList.map(el => <p>{el}</p>)}
        </div>
    )
}
 export default Header