import classes from './AvailableMeals.module.css';

const dummyMeals = [
    { id: '1', name: 'King Prawn Butterfly', description: 'Delicalely seasoned king prawn in a crispy breaded coat', price: 6.55 },
    { id: '2', name: 'Goan Masala', description: 'Fresh curry cooked in a truly goat style with coconut powder', price: 9.55 },
    { id: '3', name: 'Bombay Chicken', description: 'With onions, peppers, tomatoes & fresh herbs, dry sauce with egg', price: 10.55 },
    { id: '4', name: 'Biryani', description: 'Biryanis is the imperial amongst all the rice dishes of India.', price: 10.99 }
];

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <ul>
                {dummyMeals.map((item) => <li>{item.name}</li> )}
            </ul>
        </section>
    );
};

export default AvailableMeals;