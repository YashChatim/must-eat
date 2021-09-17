import classes from '../Layout/HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span>Cart</span>
        </button>
    );
};

export default HeaderCartButton;