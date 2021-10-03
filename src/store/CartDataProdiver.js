import { useReducer } from 'react';
import CartContext from './CartContext';

const initialCartState = {
    mealItems: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'AddItem' ) {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        // findIndex - finds the index of item in an array
        const existingCartMealItemIndex = state.mealItems.findIndex(
            item => item.id === action.item.id
        );

        const existingCartMealItem = state.mealItems[existingCartMealItemIndex];

        let updatedMealItems;
        if (existingCartMealItem) {
            const updatedMealItem = {
                ...existingCartMealItem,
                amount: existingCartMealItem.amount + action.item.amount
            };
            updatedMealItems = [...state.mealItems];
            updatedMealItems[existingCartMealItemIndex] = updatedMealItem;
        } else {
            updatedMealItems = state.mealItems.concat(action.item);
        }

        return {
            mealItems: updatedMealItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'RemoveItem' ) {
        const existingCartMealItemIndex = state.mealItems.findIndex(
            item => item.id === action.item.id
        );

        const existingCartMealItem = state.mealItems[existingCartMealItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartMealItem.price;

        let updatedMealItems;
        if (existingCartMealItem.amount === 1) {
            // filter - creates a new array with all elements that pass the test
            updatedMealItems = state.mealItems.filter(
                item => item.id !== action.id
            );
        } else {
            const updatedMealItem = { ...existingCartMealItem, amount: existingCartMealItem.amount - 1 };
            updatedMealItems = [...state.mealItems];
            updatedMealItems[existingCartMealItemIndex] = updatedMealItem;
        }

        return {
            mealItems: updatedMealItems,
            totalAmount: updatedTotalAmount
        }
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