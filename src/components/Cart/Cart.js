import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = [{id: 1, name: 'Biryani'}];

    return (
        <Modal onHideCart={props.onHideCart}>
            <div className={classes['cart-items']}>
                {cartItems.map((items) => items.name)}
            </div>
            <div className={classes.total}>Total amount: 10</div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.order}>Place Order</button>
            </div>
        </Modal>
    );
};

export default Cart;