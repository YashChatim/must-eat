import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartMealItem from './CartMealItem';
import CartContext from '../../store/CartContext';
import Actions from '../UI/Actions';

import classes from './Cart.module.css';

const Cart = props => {
    const cartContext = useContext(CartContext);
    const totalAmount = `£${cartContext.totalAmount}`;
    const hasMealItems = cartContext.mealItems.length > 0;

    const addMealItemFromCartHandler = item => {
        cartContext.addMealItem({ ...item, amount: 1 });
    }

    const removeMealItemFromCartHandler = item => {
        cartContext.removeMealItem(item);
    }

    return (
        <Modal onHideCart={props.onHideCart}>
            <div className={classes['cart-items']}>
                {cartContext.mealItems.map((item) => 
                    <CartMealItem 
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onAdd={() => addMealItemFromCartHandler(item)}
                        onRemove={() => removeMealItemFromCartHandler(item)}
                    />    
                )}
            </div>
            <div className={classes.total}>Total amount: {totalAmount}</div>
            <Actions 
                outerClass={classes.actions}
                leftButtonClass={classes['button-alt']}
                onLeftButton={props.onHideCart}
                leftButtonText='Close'
                rightButtonClass={classes.order}
                rightButtonText='Place Order'
                onDisplayButton={hasMealItems ? 'inline-block' : 'none'}
            />
        </Modal>
    );
};

export default Cart;