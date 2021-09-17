import React from 'react';

{/* Context - pass data through the component tree without passing props down manually at every level */}
const CartContext = React.createContext({
    mealItems: [],
    totalAmount: 0,
    addMealItem: (item) => {},
    removeMealItem: (id) => {}
});

export default CartContext;