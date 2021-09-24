import React from 'react';

const CartContext = React.createContext({
    // Context - pass data through the component tree without passing props down manually at every level
    mealItems: [],
    totalAmount: 0,
    addMealItem: item => {},
    removeMealItem: item => {}
});

export default CartContext;