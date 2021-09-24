import { useRef } from 'react';

import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault(); // preventDefault - prevent browser reloading
        const enteredAmount = Number(amountInputRef.current.value);

        props.onAddMealItemToCart(enteredAmount);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label='Amount' 
                input={{
                    id: 'amount',
                    type: 'number',
                    min: 1,
                    max: 10,
                    step: 1,
                    defaultValue: 1
                }} 
            />
            <button>Add item</button>
        </form>
    );
};

export default MealItemForm;