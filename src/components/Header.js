import classes from './header.module.css'


const Header = ({ menuList }) => {
    console.log(menuList, 'list');
    return (
        <div className={classes.header}>
            Header
            <div className={classes.block}>
                Main
            </div>
            {menuList.map(el => <p>{el}</p>)}
        </div>
    )
}


export default Header;