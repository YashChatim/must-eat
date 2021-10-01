import Actions from '../UI/Actions';

import classes from './CartMealItem.module.css';

const CartMealItem = (props) => {
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{props.price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <Actions 
                outerClass={classes.actions}
                onLeftButton={props.onAdd}
                leftButtonText='+'
                onRightButton={props.onRemove}
                rightButtonText='−'
            />
        </li>
    );
};

export default CartMealItem;
