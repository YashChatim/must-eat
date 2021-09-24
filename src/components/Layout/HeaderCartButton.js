import { useContext } from 'react';

import CartContext from '../../store/CartContext';

import classes from '../Layout/HeaderCartButton.module.css';

const HeaderCartButton = props => {
    // useContext - Accepts a context object given by the context provider
    const cartContext = useContext(CartContext);

    // reduce - returns a single value i.e. function's accumulated result, does not change the original array
    const numberOfAddedMealItems = cartContext.mealItems.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span>Cart: </span>
            <span className={classes.badge}>{numberOfAddedMealItems}</span>
        </button>
    );
};

export default HeaderCartButton;