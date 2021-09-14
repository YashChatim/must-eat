import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delivering delicious food To You</h2>
            <p>Choose from a wide selection of available meals</p>
            <p>All our meals are prepared with high-quality ingredients by our experienced chefs!</p>
        </section>
    );
};

export default MealsSummary;