import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import headerImage from '../../assets/headerImage.jpg';
import classes from './MainHeader.module.css';

const MainHeader = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>MustEat</h1>
                <HeaderCartButton onClick={props.onDisplayCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="MustEat Header Image" />
            </div>
        </Fragment>
    );
};

export default MainHeader;