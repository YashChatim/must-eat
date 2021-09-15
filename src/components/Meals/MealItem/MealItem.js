import classes from './MealItem.module.css';

const MealItem = props=> {
    return (
        <div className={classes.meal}>
            <div>
                <h2>{props.name}</h2>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>£{props.price}</p>
            </div>
        </div>
    );
};

export default MealItem;