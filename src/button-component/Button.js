import classes from './button.module.css'


const Button = ({ clickText }) => {
    return (
        <button className={classes.clickText}>{clickText}</button>
    )
};

export default Button;