import CartContext from './CartContext';

const CartDataProdiver = props => {
    const addMealItemToCartHandler = item => {

    };

    const removeMealItemFromCartHandler = id => {

    };

    const cartContext = {
        mealItems: [],
        totalAmount: 0,
        addMealItem: addMealItemToCartHandler,
        removeMealItem: removeMealItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
};

export default CartDataProdiver;