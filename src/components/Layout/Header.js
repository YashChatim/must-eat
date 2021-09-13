import { Fragment } from "react";

import headerImage from "../../assets/headerImage.jpg";
import classes from "./Header.module.css";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>MustEat</h1>
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="MustEat Header Image" />
            </div>
        </Fragment>
    );
};

export default Header;