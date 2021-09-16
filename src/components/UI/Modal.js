import { Fragment } from 'react';

import classes from './Modal.module.css';

const Modal = props => {
    return (
        <Fragment>
            <div className={classes.backdrop}></div>
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        </Fragment>
    );
};

export default Modal;