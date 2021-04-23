import classes from "./Header.module.css";
import { Fragment } from "react";
import fotoMeals from '../../assets/hamburger.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>

        <div className={classes['meals-image']}>
            <img src={fotoMeals} alt="meals picture" />
        </div>
    </Fragment>
    )
}

export default Header;