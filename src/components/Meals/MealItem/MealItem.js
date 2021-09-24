import { useContext } from 'react';

import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css';
import CartContext from '../../../store/CartContext';

const MealItem = props => {
    const cartContext = useContext(CartContext);

    const addMealItemToCartHandler = amount => {
        cartContext.addMealItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <div className={classes.meal}>
            <div>
                <h2>{props.name}</h2>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>£{props.price}</p>
            </div>
            <div>
                <MealItemForm onAddMealItemToCart={addMealItemToCartHandler} />
            </div>
        </div>
    );
};

export default MealItem;