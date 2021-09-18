import { useReducer } from 'react';
import CartContext from './CartContext';

const initialCartState = {
    mealItems: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'AddItem' ) {
        const updatedMealItems = state.mealItems.concat(action.item);
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        return {
            mealItems: updatedMealItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'RemoveItem' ) {

    }

    return initialCartState;
}

const CartDataProdiver = props => {
    // useReducer - used to manage complex state
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

    const addMealItemToCartHandler = item => {
        dispatchCartAction({
            type: 'AddItem',
            item: item
        });
    };

    const removeMealItemFromCartHandler = item => {
        dispatchCartAction({
            type: 'RemoveItem',
            item: item
        });
    };

    const cartContext = {
        mealItems: cartState.mealItems,
        totalAmount: cartState.totalAmount,
        addMealItem: addMealItemToCartHandler,
        removeMealItem: removeMealItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
};

export default CartDataProdiver;