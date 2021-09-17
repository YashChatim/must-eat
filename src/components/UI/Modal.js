import { Fragment } from 'react';

import classes from './Modal.module.css';

const Modal = props => {
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onHideCart}></div>
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        </Fragment>
    );
};

export default Modal;