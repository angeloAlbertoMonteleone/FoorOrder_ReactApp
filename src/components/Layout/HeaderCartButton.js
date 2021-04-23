import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return (
    <button className={classes.button} onClick={props.onClick}>
        <span>
            <CartIcon className={classes.icon} />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            3
        </span>
    </button>
    )
}

export default HeaderCartButton;